import './Welcome.css';
import { ReactComponent as MrZ } from '../../assets/mrz.svg';

const Welcome = () => {
    return (
        <div className='welcome-container'>
            <div className='logo-container'>
                <MrZ width={400} height={400} />
            </div>
            
            <div className='content-container'>
                <h1>Finding Spacecraft for MrZ</h1>
                
                <p className='sub-header'>
                Mr Little Z has multiple spaceships in his spaceport, and he finds it hard to keep track of them.
                We are helping him to sort this problem out so that he can go to his work without any problem. 
                </p>

                <a href='/' className='btn'>
                    Let's Go
                </a>
            </div>
        </div>
    )
}

export default Welcome;