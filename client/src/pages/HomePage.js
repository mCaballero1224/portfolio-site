import Terminal from '../components/Terminal';
import Header from '../components/Header';
import Menu from '../components/Menu';

function HomePage() {
    return(
        <div className="home">
            <Header />
            <Menu />
            <div className="">
                <div className="">
                    <h2>Welcome!</h2>
                    <p>This is my corner of the internet. The bulk of the motivation for this website was orignally sparked by a web development class, I've been inpsired by Luke Smith's <a className="external_site_link" target="_" href="https://landchad.net">LandChad.net</a>, and his call to action for more people to carve out their own chunks of the internet away from proprietary services.</p>
                    <p>The goal of this website is to just <strong>build</strong> stuff. Over the course of the next year, I plan to do the following:</p>
                    <ul>
                        <li>Code this website from scratch whenever practical. I'm limiting myself to the React framework within a MERN stack for the time being.</li>
                        <li>Implement an interactable terminal emulator within the website.</li>
                        <li>Implement a basic chat app</li>
                        <li>Host a git server with a useable frontend to host my projects and repositories</li>
                        <li>Create forms to send/recieive emails for various purposes.</li>
                        <li>Create a blog to update whoever's interested about current projects, and my general ideas about the <strong>joys</strong> of computer science.</li>
                    </ul>
                    <p>You can track the current progress of all of this at my <a target="_" href="https://github.com/mCaballero1224">GitHub</a> page. I'll be happy to update the site once I'm able to host things locally.</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
