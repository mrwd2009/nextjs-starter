import { useClassNameInRoot } from '../../hooks';
import { useStyle as usePanelStyle } from '../Panel/style';
import { useStyle as useSplitPaneStyle } from '../SplitPane/style';
import { useStyle as useCollapsibleSplitPaneStyle } from '../CollapsibleSplitPane/style';

export const useComponentsCssInJsStyleInitializer = () => {
  const { mainClassName: panelClassName } = usePanelStyle();
  const { mainClassName: splitPaneClassName } = useSplitPaneStyle();
  const { mainClassName: collapsibleSplitPaneClassName } = useCollapsibleSplitPaneStyle();
  useClassNameInRoot(panelClassName, splitPaneClassName, collapsibleSplitPaneClassName);
};
