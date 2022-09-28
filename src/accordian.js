import React from "react";
// import AddCircleOutlineIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { NoEncryption } from "@material-ui/icons";
import { blue } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// MuiAccordion-root.Mui-expanded:first-child 
export default function Accord() {
return (
	<div stlye={{}}>
	<Accordion className="accordian">
		<AccordionSummary
		expandIcon={<AddIcon />}
		aria-controls="panel1a-content"
		>
		<Typography
			style={{
			fontWeight: 10,
			}}
		>
			Apply to be a pedlar creator 
		</Typography>
		</AccordionSummary>
		<AccordionDetails>
		<Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
		</AccordionDetails>
	</Accordion>
    <Accordion className="accordian">
		<AccordionSummary
		expandIcon={<AddIcon />}
		aria-controls="panel1a-content"
		>
		<Typography
			style={{
			fontWeight: 10,
			}}
		>
			Complete our vetting process
		</Typography>
		</AccordionSummary>
		<AccordionDetails>
		<Typography>Greetings of the day :)</Typography>
		</AccordionDetails>
	</Accordion>
    <Accordion className="accordian">
		<AccordionSummary
		expandIcon={<AddIcon />}
		aria-controls="panel1a-content"
		>
		<Typography
			style={{
			fontWeight: 10,
			}}
		>
			Build your store in minutes
		</Typography>
		</AccordionSummary>
		<AccordionDetails>
		<Typography>Greetings of the day :)</Typography>
		</AccordionDetails>
	</Accordion>
    <Accordion className="accordian">
		<AccordionSummary
		expandIcon={<AddIcon />}
		aria-controls="panel1a-content"
		>
		<Typography
			style={{
			fontWeight: 10,
			}}
		>
			Go Live
		</Typography>
		</AccordionSummary>
		<AccordionDetails>
		<Typography>Greetings of the day :)</Typography>
		</AccordionDetails>
	</Accordion>
    <Accordion className="accordian">
		<AccordionSummary
		expandIcon={<AddIcon />}
		aria-controls="panel1a-content"
		>
		<Typography
			style={{
			fontWeight: 10,
			}}
		>
			Go Live
		</Typography>
		</AccordionSummary>
		<AccordionDetails>
		<Typography>Greetings of the day :)</Typography>
		</AccordionDetails>
	</Accordion>
	</div>
);
}
