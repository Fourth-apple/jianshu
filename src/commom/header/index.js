import React,{Component} from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {actionCreators} from './store'
import {
    HeaderWrapper,
    Logo,
	Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoItem,
    SearchInfoSwitch,
    SearchInfoList,
    Addition,
    Button,
} from './style';

class Header extends Component{
    getListArea(show){
        const {list,page,handdleMouseEnter,handdleMouseLeave,handdleChangePage,totalPage}=this.props;
        const pageList=[];
        const newList=list.toJS();

        if(newList.length){
            for(let i=(page-1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if(show){
            return(
                <SearchInfo onMouseEnter={()=>{handdleMouseEnter()}}
                            onMouseLeave={()=>{handdleMouseLeave()}}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>handdleChangePage(page,totalPage,this.spinIcon)}>
                    <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe600;</i>
                    换一批
                    
                    </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render(){
        let {focused,handdleInputFocus,handdleInputBlur,mouseIn,list}=this.props
        return(
            <HeaderWrapper>
            <Logo/>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <NavItem className='right'>登陆</NavItem>
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch className={focused?"focused":""}
                        onFocus={()=>{handdleInputFocus(list)}}
                        onBlur={handdleInputBlur}></NavSearch>
                    </CSSTransition>
                    <i className={focused?"focused iconfont zoom":"iconfont zoom"}>&#xe614;</i>
                   {this.getListArea(focused||mouseIn)}
                   {/* 上面一行代码时表示那个换一批的框框的 */}
                </SearchWrapper>
            </Nav>
            <Addition>
            <Button className='writting'>
                <i className="iconfont">&#xe616;</i>
                写文章 
            </Button>
            <Button className='reg'>注册</Button>
            </Addition>
    </HeaderWrapper>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
    // focused:state.get('header').get('focused')
    focused:state.getIn(['header','focused']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    mouseIn:state.getIn(['header','mouseIn']),
    totalPage:state.getIn(['header','totalPage'])
    }
    
}
const mapDispatchToProps=(dispatch)=>{
    return{
    handdleInputFocus(list){
        console.log(list);
        (list.size===0)&&dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
        },
    handdleInputBlur(){
    
        dispatch(actionCreators.searchBlur());
       },
    handdleMouseEnter(){
        dispatch(actionCreators.mouseEnter());
       
    },
    handdleMouseLeave(){
        dispatch(actionCreators.mouseLeave());
       },
    handdleChangePage(page,totalPage,spin){
        let originAngle=spin.style.transform.replace(/[^0-9]/ig, '')
        if(originAngle){
            originAngle = parseInt(originAngle,10)
        }else{
            originAngle=0;
        }
        spin.style.transform='rotate('+(originAngle+360)+'deg)';
        console.log(page,totalPage,spin,originAngle)
        if(page < totalPage){
            dispatch(actionCreators.changePage(page + 1));
        }else{
            dispatch(actionCreators.changePage(1));
        }
        
    }
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);