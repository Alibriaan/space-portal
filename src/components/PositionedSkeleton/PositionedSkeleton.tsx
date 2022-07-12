import { Skeleton, SkeletonProps } from "@mui/material";
import { styled } from "@mui/system";
import addTestId from '../../hok/testId';

export interface AbsoluteSkeletonProps {
  position: 'absolute' | 'relative' | 'static',
  top: string;
  left: string;
  right: string;
  bottom: string;
}

const PositionedSkeleton = styled(Skeleton)<SkeletonProps & Partial<AbsoluteSkeletonProps>>((props) => ({
  '&': {
    position: props.position || '',
    top: props.top || '',
    left: props.left || '',
    right: props.right || '',
    bottom: props.bottom || '',
  }
}));

export default addTestId(PositionedSkeleton, 'positioned-skeleton');
