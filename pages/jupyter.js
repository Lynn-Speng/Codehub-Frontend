import { styled } from '@material-ui/core/styles';

const jupyterIframe = styled('iframe')({
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    zIndex: "999999"
})

const Jupyter = (props) => {
    return ( 
        <iframe src="http://0.0.0.0:8888/?token=3ca85d47d548e4ca86395673f8ca302a266a118942fbf195" width="100%" >
            Your browser doesn't support iframes
        </iframe>
     );
}
 
export default Jupyter;