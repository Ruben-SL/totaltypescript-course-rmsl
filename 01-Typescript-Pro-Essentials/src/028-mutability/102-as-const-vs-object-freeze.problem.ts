type ButtonType = "button" | "submit" | "reset";

type ButtonAttributes = {
  cancel: {
    type: ButtonType;
  };
  confirm: {
    type: ButtonType;
  };
};

const modifyButtons = (attributes: ButtonAttributes) => { };

const buttonAttributes = Object.freeze({
  cancel: {
    type: <ButtonType>"button",
  },
  confirm: {
    type: <ButtonType>"button",
  },
});

modifyButtons(buttonAttributes);
