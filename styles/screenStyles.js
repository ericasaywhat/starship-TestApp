import colors from './colors'
import fonts from './fonts'

const ScreenStyles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    margin: 20
  },
  title: {
    alignSelf: 'center',
    margin: 20,
    ...fonts.title
  },
  textBox: {
    height: 28,
    borderColor: colors.grey,
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  primaryButton: {
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    minWidth: '30%'
  },
  secondaryButton: {
    backgroundColor: colors.grey,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20,
    minWidth: '30%',
    borderColor: colors.primary,
    borderWidth: 1
  },
  prompt: {
    padding: 10,
    ...fonts.body
  }
}

export default ScreenStyles
