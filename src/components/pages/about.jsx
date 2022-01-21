import React, {useState} from 'react'
import "../../styles/about.sass"
import {motion} from "framer-motion";
import {isMobile} from "../../services/auth";
import {MemoizedProfilePicture} from "../about/ProfilePicture";

const getFilmmakers = (films) => {
    return Array.from(new Set(films.map(film => film.filmmaker[0])))
}

const getFilmmakerName = (filmmaker) => `${filmmaker.firstName} ${filmmaker.lastName}`

const getPronouns = (filmmaker) => `(${filmmaker.pronouns.join('/')})`

const getProfilePictures = (filmmakers, selectedFilmmaker, setFilmmaker) => {
    const pictures = new Array(16).fill(null)
    for (let i = 0; i < pictures.length; i++) {
        const filmmaker = filmmakers[i]
        pictures[i] = <MemoizedProfilePicture
            key={i}
            filmmaker={filmmaker}
            isSelected={selectedFilmmaker === filmmaker}
            setFilmmaker={setFilmmaker}/>
    }
    return pictures
}

export default function About({films}) {
    const filmmakers = getFilmmakers(films)

    const [selectedFilmmaker, setSelectedFilmmaker] = useState(filmmakers[filmmakers.length - 1])
    const [hidden, setHidden] = useState(false)

    const setSelectedFilmmakerCallback = (filmmaker) => {
        if (filmmaker === selectedFilmmaker) {
            return
        }
        setHidden(true)
        setTimeout(() => {
            setHidden(false)
            setSelectedFilmmaker(filmmaker)
        }, 100)
    }

    const profilePictures = getProfilePictures(filmmakers, selectedFilmmaker, setSelectedFilmmakerCallback)
    const name = getFilmmakerName(selectedFilmmaker)
    const pronouns = getPronouns(selectedFilmmaker)
    const bio = JSON.parse(selectedFilmmaker.bio.raw).content[0].content[0].value

    const link = (selectedFilmmaker.links === null) ? null : <div>
        <span className={"filmmakerLinksText"}>Links | </span>
        <a className={"filmmakerLink"}
           href={selectedFilmmaker.links.url}
        >{selectedFilmmaker.links.displayText}</a>
    </div>


    return (<div className={"aboutContainer"}>
            <div className={"aboutDescription"}>We are making 52 movies in one year.</div>
            <div className={"profilesContainer"}>
                <div className={"picturesContainer"}>
                    {profilePictures}
                </div>
                <motion.div className={"profileDescriptionContainer"}
                            key={"profileDescriptionContainer"}
                            initial={{opacity: 1}}
                            animate={{opacity: hidden ? 0 : 1}}
                >
                    <h2 className={"profileHeader"}>
                        <span className={"filmmakerName"}>{name}</span>
                        <span className={"filmmakerPronoun"}> {pronouns}</span>
                    </h2>
                    <h3 className={"filmmakerDescription"}>{bio}</h3>
                    {link}
                </motion.div>
            </div>
        </div>
    )
}