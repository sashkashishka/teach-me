import * as React from 'react';
import {
  Flex,
  Box,
  FlexProps,
  // BoxProps,
} from 'rebass';

export const AdItem: React.FC<FlexProps> = props => (
  <Box
    // @ts-ignore
    flexGrow={1}
    flexShrink={1}
    flexBasis={{
      _: 'auto',
      md: '100%',
    }}
    order={0}
    {...props}
  />
);

export const FluidItem: React.FC<FlexProps> = props => (
  <Box
    // @ts-ignore
    flexGrow={1}
    flexShrink={0}
    flexBasis="auto"
    order={0}
    // we can accept `width` prop with responsive styles
    sx={{
      width: ['100%'],
    }}
    {...props}
  />
);

const AdRow: React.ForwardRefRenderFunction<any, FlexProps> = React.forwardRef((props, ref) => (
  <Flex
    ref={ref}
    width="100%"
    flexWrap="nowrap"
    flexDirection={{
      _: 'column',
      md: 'row',
    }}
    {...props}
  />
));

export default AdRow;
