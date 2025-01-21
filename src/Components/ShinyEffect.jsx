const ShinyEffect = ( left, right, top, size = '10vw') => {

  const positionStyles = {
    top: `${top}px`,
    width: size,
    height: size,
    zIndex: -1,
  };

  if (left !== undefined) {
    positionStyles.left = `${left}px`;
  }

  if (right !== undefined) {
    positionStyles.right = `${right}px`;
  }

  return (
    <div className="shiny-effect" style={positionStyles}></div>
  );
}

export default ShinyEffect;
