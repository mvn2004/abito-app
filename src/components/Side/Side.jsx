import './Side.css';

export const Side = ({ img, title, text }) => {
    return (
        <div className="content-side_list-item">
            <img className="content-side_list-item--img" src={img} alt="side-info" />
            <h5 className="content-side_list-item--title">{title}</h5>
            <p className="content-side_list-item--text">{text}</p>
        </div>
    );
}