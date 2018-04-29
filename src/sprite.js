import Style from './style';

const sprite = (x, y, uri, styles) => {


  const style = new Style(styles);

  const g = PIXI.Sprite.fromImage(`${uri}`);

  g.anchor.set(0.5);
  g.x = x;
  g.y = y;

  return g;
};

export default sprite;