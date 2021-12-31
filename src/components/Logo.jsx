import React, {useState} from "react";

// TODO: BAD. Figure out how to import from file
export default function Logo() {
    const [hovered, setHovered] = useState(false)
    const className = hovered ? 'logoSVG hovered' : 'logoSVG'
    return (
        <div
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}>
            <svg className={className} xmlns="http://www.w3.org/2000/svg" width="120" height="120"
                 viewBox="0 0 1941 2000" color={'white'}>
                <path id="_52_" data-name="52 " className="cls-1"
                      d="M396.752,1237.45c316.719,0,509.134-162.82,509.134-390.77,0-208.411-170.279-337.04-461.456-337.04-124.3,0-219.66,27.68-309.907,76.526L175.39,325.652H842.883L897.372,32.574H182.2L91.953,635.013l5.108,1.628c56.192-40.706,124.3-63.5,212.849-63.5,151.548,0,221.362,105.834,221.362,291.451,0,227.949-95.356,340.3-192.415,340.3-11.919,0-25.542-1.63-37.461-6.52L80.033,768.526h-1.7L0,1160.93C120.9,1208.14,228.176,1237.45,396.752,1237.45ZM1907.12,815.744v96.065H1312.84c473.38-286.566,616.41-429.848,616.41-613.837,0-192.129-160.06-297.963-468.26-297.963-148.15,0-284.37,39.077-405.27,100.95l141.34,405.425h1.7L1375.85,35.83a114.356,114.356,0,0,1,34.05-4.885c81.74,0,127.71,89.552,127.71,262.143,0,227.95-107.27,437.989-408.67,804.342l-86.84,105.83v1.63h899.07V815.744h-34.05Z"/>
                <path id="films" className="cls-1"
                      d="M472.679,1483.93q20.453-19.11,20.459-48.48,0-30.225-20.459-48.92t-50.7-18.68q-30.25,0-51.148,18.68t-20.9,48.92q0,29.355,20.9,48.48t51.148,19.13Q452.206,1503.06,472.679,1483.93Zm52.482,506.59v-8.9l-8.895-2.67q-16.908-5.34-23.573-16.01t-6.671-28.46V1685.41l2.668-126.31-8.895-8.9-162.783,52.48v8.9l12.453,2.67q17.784,3.555,24.462,12.89t6.672,28.02v278.43q0,17.805-6.672,28.46-6.671,10.68-24.462,16.01l-12.453,3.56v8.9H525.161Zm254.4,0v-8.9L768,1978.95q-16.908-5.34-24.017-16.45-7.129-11.115-7.116-28.91,0-32.025-.445-64.49t-0.444-65.38V1499.5l3.558-124.54-10.675-8-162.783,38.25v8.89l11.564,2.67q17.784,4.47,24.907,13.79,7.109,9.345,7.116,27.13v475.9q0,33.81-32.023,44.47l-10.674,3.56v8.9h212.6Zm248.176,0v-8.9l-8.01-2.67q-31.145-8.88-31.131-43.58v-298q22.231-19.545,42.7-29.8,20.445-10.215,40.91-10.22,31.14,0,44.04,15.12,12.885,15.135,12.89,50.7v271.31q0,17.8-6.67,28.02t-23.57,15.56l-12.45,3.56v8.9h206.37v-8.9l-8.01-2.67q-31.14-8.88-32.02-43.58V1704.98q0-18.69-1.34-35.58a142.194,142.194,0,0,0-5.78-31.14q24.015-20.445,45.81-30.69a104.729,104.729,0,0,1,44.92-10.22q29.355,0,42.7,13.78,13.35,13.8,13.34,51.15v272.2q0,17.8-6.67,28.46-6.675,10.68-23.57,16.01l-8.9,2.67v8.9h205.49v-8.9l-9.79-2.67q-32.025-8.88-32.02-43.58V1674.73q0-64.92-29.8-95.18-29.82-30.225-92.96-30.24-38.25,0-78.72,19.13-40.485,19.125-75.17,52.03-13.335-36.465-39.13-53.81-25.815-17.355-68.5-17.35-40.92,0-78.72,20.46a288.692,288.692,0,0,0-67.16,49.81L979.7,1559.1l-8.9-8.9L818.7,1601.79v8.9l13.343,3.56q17.784,3.555,24.017,12.89,6.213,9.345,6.227,28.91v278.43q-0.9,17.8-7.561,28.46-6.671,10.68-23.572,15.12l-12.454,3.56v8.9H1027.74Zm863.27-25.8q51.15-39.135,51.15-104.08,0-48.03-27.58-82.28-27.57-34.23-91.62-53.81l-40.03-11.57q-44.49-15.105-67.16-32.91-22.68-17.775-22.68-48.03,0-31.125,26.69-48.04,26.685-16.89,56.93-16.9,32.895,0,49.37,12.01,16.44,12.015,33.35,41.36l31.14,55.15h8.89l5.34-96.07a257.729,257.729,0,0,0-59.15-22.68,273.163,273.163,0,0,0-65.38-7.56q-86.3,0-132.54,40.92-46.275,40.92-46.26,99.63,0,48.93,31.13,82.72,31.14,33.825,85.4,49.82l37.36,11.56q50.7,15.135,69.38,33.8t18.68,48.04q0,32.01-26.24,51.14t-68.94,19.13q-36.48,0-60.04-17.35-23.58-17.34-43.14-52.92l-30.25-53.38h-8.89l-0.89,105.86a363.6,363.6,0,0,0,64.04,25.35q34.7,10.215,78.28,10.23Q1839.855,2003.86,1891.01,1964.72Zm-1657.219,25.8v-8.9l-22.239-5.34q-35.588-9.78-35.581-43.58V1580.44H275.6v-17.79H175.971q0-40.02,3.114-81.83t9.34-72.94q4.44-14.22,14.232-14.68,9.778-.435,19.57,12.01l12.453,15.12q16.887,29.355,34.692,40.92a70.325,70.325,0,0,0,39.139,11.56q25.789,0,40.028-13.79,14.218-13.77,14.233-37.8,0-33.795-29.354-48.48-29.355-14.67-64.936-14.68-36.485,0-74.275,12.9-37.82,12.9-71.607,44.92a311.235,311.235,0,0,0-39.584,48.48q-17.346,26.25-26.241,60.93-3.565,18.69-11.564,29.36t-25.8,12.45l-19.57,3.56v9.78H49.659v223.28q0,32.91-.445,65.38t-0.445,65.38q0,17.8-9.785,28.91-9.8,11.13-26.686,15.56l-11.564,2.67v8.9H233.791Z"/>
            </svg>
        </div>
    )
}