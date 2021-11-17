import { createRef, useEffect } from "react";
import { IconType } from "react-icons";
import styles from "../styles/components/Skill.module.scss";

interface SkillProps {
    Icon: IconType;
    name: string;
    percentage: number;
}

function Skill({ Icon, name, percentage }: SkillProps) {
    const progressBarRef = createRef<HTMLDivElement>();

    useEffect(() => {
        if (progressBarRef.current) {
            progressBarRef.current.style.width = percentage + "%";
        }
    }, []);

    return (
        <div className={styles.container}>
            <p><Icon /> {name}</p>
            <div>
                <div ref={progressBarRef}>{percentage}%</div>
            </div>
        </div>
    );
}

export default Skill;
