import { Button } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CountryContext } from "../../countries";
import { policyToURL } from "../tools/url";

export default function SimulateButton(props) {
	const country = useContext(CountryContext);
	const url = policyToURL(`/${country.name}/${props.target}`, country.policy);
	let button = <Button
		disabled={props.disabled}
		type={props.primary ? "primary" : null}
		onClick={props.onClick}>{props.text}
		block
	</Button>;
	if (props.target) {
		button = <Link to={url}>{button}</Link>;
	}
	return (
		<div style={{ marginBottom: 20 }}>
			{button}
		</div>
	);
}