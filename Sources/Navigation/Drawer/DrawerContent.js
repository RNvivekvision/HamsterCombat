import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Images } from '../../Constants';
import { useInset } from '../../Hooks';
import { DummyData } from '../../Utils';

const DrawerContent = ({ navigation }) => {
  const styles = useStyles();

  return (
    <View style={RNStyles.container}>
      <View style={styles.logoContainer}>
        <RNText style={styles.title}>{'User Name'}</RNText>
      </View>

      <View style={RNStyles.container}>
        <RNImage source={Images.appIcon} style={styles.logo} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ paddingTop: hp(8) }}>
            {DummyData.Drawer.map((v, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.6}
                onPress={() => navigation.navigate(v.nav)}
                style={styles.renderDrawer}>
                <View style={RNStyles.flexRow1}>
                  <RNImage
                    source={Images['drawer_' + i]}
                    style={RNStyles.icon}
                  />
                  <RNText
                    size={FontSize.font14}
                    family={FontFamily.SemiBold}
                    pLeft={wp(4)}>
                    {v.title}
                  </RNText>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const size = { logo: wp(30), icon: wp(4) };
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {},
    logoContainer: {
      height: hp(25),
      backgroundColor: Colors.Primary,
      paddingTop: inset.top + hp(2),
    },
    title: {
      textAlign: 'center',
      fontSize: FontSize.font18,
      fontFamily: FontFamily.SemiBold,
      width: '75%',
      alignSelf: 'center',
      color: Colors.White,
    },
    logo: {
      width: size.logo,
      height: size.logo,
      alignSelf: 'center',
      position: 'absolute',
      top: -wp(16),
      backgroundColor: Colors.error,
      zIndex: 1,
    },
    icon: {
      width: size.icon,
      height: size.icon,
    },
    buttonContainer: {
      ...RNStyles.flexRow,
      backgroundColor: Colors.Primary,
      marginHorizontal: wp(4),
      marginVertical: hp(2),
      paddingVertical: hp(2),
      paddingHorizontal: wp(4),
      borderRadius: wp(3),
      marginBottom: inset.bottom + hp(2),
    },
    renderDrawer: {
      ...RNStyles.flexRow,
      paddingHorizontal: wp(6),
      paddingVertical: hp(1.5),
      marginVertical: hp(0.5),
    },
  });
};

export default DrawerContent;
