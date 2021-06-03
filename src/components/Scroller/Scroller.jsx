import StyledScroller from './StyledScroller';
import PublishIcon from '@material-ui/icons/Publish';

const Scroller = () => {
  const scrollToTop = () => {
    return window.scrollTo({ top: 0 });
  };

  return (
    <StyledScroller onClick={scrollToTop}>
      <PublishIcon style={{ fontSize: 36 }} />
    </StyledScroller>
  );
};

export default Scroller;
