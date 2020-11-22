import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { ReduxDispatch, RootState } from 'src/reducers'
import { bindActionCreators } from 'redux'
import * as modalActions from '../reducers/actions/modal'

export interface ModalProps {
  showStatus: boolean
  show: () => any
  hide: () => any
  show_async: () => any
  hide_async: () => any
}

function Modal(props: ModalProps) {
  return (
    <div>
      <Button onClick={props.show}>显示</Button>
      <Button onClick={props.hide}>隐藏</Button>
      <Button onClick={props.show_async}>显示 async</Button>
      <Button onClick={props.hide_async}>隐藏 async</Button>
      {props.showStatus && (
        <div
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            left: '50%',
            right: '50%',
            marginLeft: -200,
            marginTop: 0,
            backgroundColor: 'skyblue',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          rong guang wuxian
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    showStatus: state.modal.show,
  }
}

const mapDispatchToProps = (dispatch: ReduxDispatch) =>
  bindActionCreators(modalActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
