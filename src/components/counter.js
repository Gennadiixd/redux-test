import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import * as actions from '../actions';
//из mapStateToProps по деструктуризации вытягиваем экшены и используем в коде
function Counter({ counter, inc, dec, refresh }) {
    return (
        <>
            <div className='jumbotron'>
                <h1>{counter}</h1>
                <button onClick={() => { inc('test') }} className='btn btn-primary'>inc</button>
                <button onClick={dec} className='btn btn-primary'>dec</button>
                <button onClick={refresh} className='btn btn-primary'>refrsh</button>
            </div>
        </>
    )
}
//в пропсы прокидываем counter со значением state
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}
// **возвращает все экшены что есть в actions обёрнутые в dispatch, готовые к отправке
// const mapDispathcToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }

//Если закинуть actions вместо mapDispathToProps то connect сама их обернёт dispatch и подготовит к отправке
export default connect(mapStateToProps, actions)(Counter)
