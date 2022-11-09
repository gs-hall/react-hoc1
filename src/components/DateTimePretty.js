// оборачивает компонент, принимая оборачиваемый компонент и функцию преобразования как аргумент, возвращает обернутый компонент

import React from "react";

export const withPrettiness = (WrappedComponent, prettyFunction) => (props) => {
  const {...args} = prettyFunction(props);
  return <WrappedComponent {...args} />
};