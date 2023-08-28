//Array of Objects
let card =	[{icon:"fa fa-bullseye",
			title:"100% Placement Assured",
			content:"The program guarantees job placement upon completion, providing students with a sense of security to excel in their training."
			},
			{icon:"fa-solid fa-photo-film",
			title:"Live Classes + Recording Access",
			content:"Students have access to both live classes and recordings, giving them flexibility and the ability to revisit class material at any time."
			},
			{icon:"fa-solid fa-user-check",
			title:"Working Professionals as Mentors",
			content:"The program utilizes experienced working professionals as mentors, providing students with practical insights and real-world knowledge."
			},
			{icon:"fa-solid fa-palette",
			title:"Build Live Projects",
			content:"Trainees work on live projects to gain practical experience and build a portfolio of work, preparing them for job opportunities."
			},
			{icon:"fa-solid fa-award",
			title:"100+ Hiring Partners",
			content:"Our recruiter network grows with over 100+ companies, increasing the likelihood of job opportunities upon completion."
			},
			{icon:"fa-solid fa-people-group",
			title:"Wide Alumni Network",
			content:"Trainees have access to a wide alumni network, providing them with networking opportunities and access to job openings in their field."
			}
			];
console.log(card);

//create a function for reuse
function getArrayElmts(elmt)				//parameter
{
	//create an HTML elements.
	let cardSec=document.createElement("div");
	let cardIcon=document.createElement("i");
	let cardTitle=document.createElement("h2");
	let cardContent=document.createElement("p");

	//add content for created elements
	//icon.innerHTML= elmt.icon;
	cardTitle.innerHTML= elmt.title;		//Here elmt is parameter, is used to access the index value from the array
	cardContent.innerHTML= elmt.content;
	
		console.log(cardIcon,cardTitle,cardContent);
	
	//add class to elements
	cardSec.setAttribute("class","align");
	cardIcon.setAttribute("class",elmt.icon);

	//AppendChild to html Element
	cardSec.appendChild(cardIcon);
	cardSec.appendChild(cardTitle);
	cardSec.appendChild(cardContent);
	
	//append DOM

	let cardList= document.getElementById("card-list");
	cardList.appendChild(cardSec);
	
}

// to get an elmy one by one from card(array)-(iteration)
for (let i=0; i< card.length; i++)
{
	getArrayElmts(card[i]);		//card[i] passed as an argument to the function.
}
