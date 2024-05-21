import React from "react";

import codepen from "../img/codepen.png";
import github from "../img/github.png";
import linkedin from "../img/linkedin.png";

export default function Footer() {

		//get current year
		const year = new Date().getFullYear();
		
		return (
			<div id="footer" className="container-fluid text-center py-5">
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-12 col-md-8 mx-auto">
							<a
								href=" "
								target="_blank"
								rel="noopener noreferrer">
								<img className="img-fluid" src={codepen} alt=""/>
							</a>
							<a
								className="px-3"
								href="https://github.com/Dishka123"
								target="_blank"
								rel="noopener noreferrer">
								<img src={github} alt=""/>
							</a>
							<a
								href="https://www.linkedin.com/in/%D0%B4%D0%B8%D0%BB%D1%8C%D1%88%D0%B0%D1%82-%D0%B0%D0%B1%D0%BB%D0%B8%D0%BA%D0%B8%D0%BC%D0%BE%D0%B2-16bb36307/"
								target="_blank"
								rel="noopener noreferrer">
								<img src={linkedin} alt=""/>
							</a>
						</div>
					</div>
					<h5 className="pt-4">Дильшат Абликимов &copy; {year}</h5>
				</div>
			</div>
		);
}
