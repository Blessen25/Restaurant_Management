import './container.css';

interface ContainerProps {

    children : React.ReactNode;
    main_style?: React.CSSProperties;
    main_class?: string;
    container_style?: React.CSSProperties;
    container_class?: string;
}

const Container: React.FC<ContainerProps> = (props) => {

    return(

        <>
            <div className={`main_container ${props.main_class ? props.main_class : ''}`} style={props.main_style ? props.main_style : {}}>
                <div className={`container ${props.container_class ? props.container_class : ''}`} style={props.container_style ? props.container_style : {}}>
                    {props.children}
                </div>    
            </div>
        </>
    )
}

export default Container;