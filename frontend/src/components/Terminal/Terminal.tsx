import './terminal.css';
import { Link } from 'react-router-dom';

export default function Terminal() {
  return (
    <div className="terminal">
      <p className="placeholder-msg">This terminal is under construction!</p>
      <p>See what else I'm working on at the <Link className="terminal-link" to={`/todo`}>Todo</Link> page!</p>
      <p className="terminal-prompt">[mcaballero@dev ~]$ <input type="text"/></p>
    </div>
  );
}
