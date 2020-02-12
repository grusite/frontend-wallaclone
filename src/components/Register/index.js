import { withTranslation } from 'react-i18next';

import { compose } from "../../utils/compose";
import Register from "./Register";
import withSession from "../../hocs/withSession";

export default compose(withSession, withTranslation())(Register);
