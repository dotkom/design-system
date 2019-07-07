import * as React from 'react';

type BaseInputProps<T> = {
  onChange: (value: T | React.SyntheticEvent | Event, event?: React.SyntheticEvent | Event) => void;
  stopPropagation: boolean;
  preventDefault: boolean;
  handleEvents: boolean;
  controlled: boolean; // should BaseInput handle changing the child's value, should probably be false in most cases
};

export function BaseInput<T>({
  onChange,
  controlled = false,
  handleEvents = true,
  defaultValue,
  defaultChecked,
  preventDefault = false,
  stopPropagation = false,
  children,
  ...rest
}: BaseInputProps<T>) {
  if (controlled && (rest.value || rest.checked)) {
    throw new Error('props.value|props.checked and props.controlled can not be defined at the same time!');
  }

  // only used if props.controlled = true
  const [checked, setChecked] = React.useState(defaultChecked);
  const [value, setValue] = React.useState(defaultValue);

  const isControlled = React.useRef(controlled);

  React.useEffect(() => {
    if (controlled !== isControlled.current) {
      throw new Error('props.controlled can not be changed!');
    }
    isControlled.current = controlled;
  }, [controlled]);

  const handleChange = (event: T | React.SyntheticEvent | Event) => {
    // guess if this is a React SyntheticEvent
    if (
      handleEvents &&
      (event instanceof Event || (event instanceof Object && event.nativeEvent && event.nativeEvent instanceof Event))
    ) {
      if (preventDefault) {
        event.preventDefault();
      }

      if (stopPropagation) {
        event.stopPropagation();
      }

      if (event.target.type === 'checkbox') {
        setChecked(event.target.checked);
        onChange(event.target.checked, event);
      } else {
        setValue(event.target.value);
        onChange(event.target.value, event);
      }
    }
    // assume event is a value to be passed up
    else {
      setValue(event);
      onChange(event);
    }
  };

  const extraProps = {
    value: controlled ? value : rest.value,
    checked: controlled ? checked : rest.checked,
    defaultValue: controlled ? undefined : defaultValue,
    defaultChecked: controlled ? undefined : defaultChecked,
  };

  const child = React.cloneElement(React.Children.only(children || <input {...extraProps} {...rest} />), {
    onChange: handleChange,
  });

  return child;
}
