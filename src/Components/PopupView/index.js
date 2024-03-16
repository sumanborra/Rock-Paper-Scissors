import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import {CustomTriggerButton} from './styledComponent'

import 'reactjs-popup/dist/index.css'
import './index.css'

const PopupView = () => {
  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={<CustomTriggerButton type="button">Rules</CustomTriggerButton>}
      >
        {close => (
          <>
            <div className="close-button-container">
              <CustomTriggerButton
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </CustomTriggerButton>
            </div>

            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
                className="rules-image"
              />
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default PopupView
