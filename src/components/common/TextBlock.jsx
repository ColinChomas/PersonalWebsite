import './TextBlock.css';

function TextBlock({ object, className }) {
  return (
    <div className={`text-block ${className}`}>
        <div key={object.title} className="text-block-item">
          {object.title && <h2>{object.title}</h2>}
          {object.description && <p>{object.description}</p>}
        </div>
    </div>
  );
}

export default TextBlock;