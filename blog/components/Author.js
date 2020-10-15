
import { GithubOutlined } from '@ant-design/icons'
import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src=""  /></div>
            <div className="author-introduction">
                Somthing about me....
                <Divider>Social Account</Divider>
                <Avatar size={28} className="account" icon={<GithubOutlined />} />
                <Avatar size={28} className="account" icon={<GithubOutlined />} />
                <Avatar size={28} className="account" icon={<GithubOutlined />} />

            </div>
        </div>
    )

}

export default Author