import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { classNames, getExtraAttrs } from '../shared/utils';
import { colorClasses } from '../shared/mixins';

/* dts-props
  id: string | number;
  className: string;
  style: React.CSSProperties;
  padding: boolean;
  COLOR_PROPS
*/

const CardContent = forwardRef((props, ref) => {
  const { className, id, style, children, padding = true } = props;
  const extraAttrs = getExtraAttrs(props);

  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));

  const classes = classNames(
    className,
    'card-content',
    {
      'card-content-padding': padding,
    },
    colorClasses(props),
  );

  return (
    <div id={id} style={style} className={classes} ref={elRef} {...extraAttrs}>
      {children}
    </div>
  );
});

CardContent.displayName = 'f7-card-content';

export default CardContent;
