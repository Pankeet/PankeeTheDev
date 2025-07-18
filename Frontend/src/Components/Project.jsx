import * as motion from "motion/react-client"
export default function ScrollTriggered() {
    return (
        <div style={container}>
            {homepageSections.map(({content, hueA, hueB, i , href}) => (
                <Card i={i} content={content} hueA={hueA} hueB={hueB} href={href} key={i} />
            ))}
        </div>
    )
}

function Card({ content , hueA, hueB, i , href }) {
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

    return (
        <a href={href} target="_blank" style={{ textDecoration: "none"}} >
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div style={{ ...splash, background }} />
            <motion.div style={card} variants={cardVariants} className="card">
                {content}
            </motion.div>
        </motion.div>
        </a>
    )
}

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const hue = (h) => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "var(--white)",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

const homepageSections = [
    { content: <Ivy />, hueA: 250, hueB: 280  , href:"https://ivy-academy.vercel.app/"},
    { content: <Zeroh />, hueA: 250, hueB: 280 , href:"https://zerohda.vercel.app/"},
    { content: <Socket />, hueA: 250, hueB: 280 , href:"https://socket-talk-liart.vercel.app/"},
    { content: <Neuro />, hueA: 250, hueB: 280 , href:"https://neuro-nest-eta.vercel.app/" },
];

function Ivy(){
    return (
        <img src="/img/Ivy.png" alt="Ivy" className="w-72 h-72" />
    )
}

function Zeroh(){
    return(
        <img src="/img/Zeroh.png" alt="Zerohda" className="w-72 h-72" />
    )
}

function Socket(){
    return(
        <img src="/img/Socket.png" alt="Socket" className="w-72 h-72" />
    )
}

function Neuro(){
    return(
        <img src="/img/Neuro.png" alt="Neuro" className="w-72 h-72" />
    )
}
