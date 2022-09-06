export function Link(props) {
    return (<a className={`App-link`} href={props.url} target="_blank" rel="noreferrer noopener">
        {props.title}
    </a>)
}