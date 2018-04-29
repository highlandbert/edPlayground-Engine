import circle from './circle';
import rectangle from './rectangle';
import sprite from './sprite';

const element = (app) => ({

  create: (container, isInteractive) => {
    app.stage.addChild(container);

    container.interact = (fun) => {
      container.interactive = true;
      container.buttonMode = true;
      container.onpointerdown = fun;
      container.on('pointerdown', (event) => {
        container.onpointerdown(event);
      });
    };

    return container;
  },

  circle: (x, y, r, styles, isInteractive) => element(app).create(circle(x, y, r, styles), isInteractive),

  rectangle: (x, y, w, h, styles, isInteractive) => element(app).create(rectangle(x, y, w, h, styles), isInteractive),

  sprite: (x, y, name, styles, isInteractive) => element(app).create(sprite(x, y, name, styles), isInteractive)

});

export default element;