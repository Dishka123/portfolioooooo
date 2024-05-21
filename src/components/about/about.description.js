import React from "react";

import myImage from "../../img/myImage.jpeg";

//import skillBars
import SkillBars from "./about.description.skillBars";

export default function AboutDescription(props) {
    return (
        <div className="row wow fadeIn" style={{ marginTop: 7 + "rem" }}>
            <div className="col-12 col-lg-6 hidden">
                <img
                    className={"img-fluid"}
                    src={myImage}
                    alt="Portfolio Image"
                    style={{
                        borderRadius: 50 + "%",
                        height: 250 + "px",
                        width: 250 + "px"
                    }}
                />
                <p className="mytext pt-3">
                Благодаря моему замечательному учителю, я научился превращать идеи в код. JavaScript и анимации — мои суперсилы для создания веселых и крутых пользовательских интерфейсов.
                </p>
            </div>

            <SkillBars />

        </div>
    );
}