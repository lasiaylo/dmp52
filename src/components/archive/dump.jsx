import Tile from "./tile";
import {Canvas, extend, useFrame, useThree} from "@react-three/fiber";
import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from "react"
import {Vector2} from "three";
import {EffectComposer} from "three/examples/jsm/postprocessing/EffectComposer"
import {RenderPass} from "three/examples/jsm/postprocessing/RenderPass"
import {OutlinePass} from "three/examples/jsm/postprocessing/OutlinePass"
import {ShaderPass} from "three/examples/jsm/postprocessing/ShaderPass"
import {RandomInNegativeRange} from "../../util/MathUtils"

extend({EffectComposer, RenderPass, OutlinePass, ShaderPass})


const hoverContext = React.createContext()
const focusContext = React.createContext()

export function useHover() {
    const ref = useRef()
    const setHovered = useContext(hoverContext)
    const onPointerOver = useCallback(() => setHovered(state => [...state, ref.current]), [])
    const onPointerOut = useCallback(() => setHovered(state => state.filter(mesh => mesh !== ref.current)), [])
    return {ref, onPointerOver, onPointerOut}
}

const Outline = ({children}) => {
    const {gl, scene, camera, size} = useThree()
    const composer = useRef()
    const [hovered, set] = useState([])
    const aspect = useMemo(() => new Vector2(size.width, size.height), [size])
    useEffect(() => composer.current.setSize(size.width, size.height), [size])
    useFrame(() => composer.current.render(), 1)
    return (
        <hoverContext.Provider value={set}>
            {children}
            <effectComposer ref={composer} args={[gl]}>
                <renderPass attachArray="passes" args={[scene, camera]}/>
                <outlinePass
                    attachArray="passes"
                    args={[aspect, scene, camera]}
                    selectedObjects={hovered}
                    visibleEdgeColor="white"
                    edgeStrength={10}
                    edgeThickness={0.1}
                />
                {/*<shaderPass attachArray="passes" args={[FXAAShader]}*/}
                {/*            uniforms-resolution-value={[1 / size.width, 1 / size.height]}/>*/}
            </effectComposer>
        </hoverContext.Provider>
    )
}

export function getTileXRotation() {
    return -0.2
}

export function getTileZRotation() {
    return RandomInNegativeRange(.7)
}

function closestFilter(intersections) {
    return intersections?.length ? [intersections[0]] : intersections
}

export default function Dump({films, setFocusedFilms}) {
    const tiles = films.map((film, i) =>
        <Tile
            film={film}
            key={i}
            delay={i * .35}
            setFocusedFilms={setFocusedFilms}
        />)

    return (
        <Canvas
            pixelRatio={window.devicePixelRatio}
            raycaster={{filter: closestFilter}}
        >
            <ambientLight intensity={2}/>
            <Outline>
                {tiles}
            </Outline>
        </Canvas>
    )
}