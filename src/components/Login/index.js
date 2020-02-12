import { withTranslation } from 'react-i18next';

import { compose } from "../../utils/compose";
import Login from "./Login";
import withSession from "../../hocs/withSession";

export default compose(withSession, withTranslation())(Login);
