import withToggle from './withToggle'

function Name({active, name, toggle}) {
    console.log(active)
    return <div onClick={toggle}>Hi {active && <>{name}</>}</div>
}

export const NamewithToggle = withToggle(Name)