import { View } from 'react-native';
import { RNContainer, RNHeader, RNStyles } from '../../Common';
import { Colors } from '../../Theme';

const HAContainer = ({ title, children, back }) => {
  return (
    <RNContainer>
      <RNHeader title={title} back={back} noScroll>
        <View
          style={{ ...RNStyles.container, backgroundColor: Colors.Primary }}>
          {children}
        </View>
      </RNHeader>
    </RNContainer>
  );
};

export default HAContainer;
