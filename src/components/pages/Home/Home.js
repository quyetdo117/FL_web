import React, { memo } from 'react';
import Breadcrum from '../../Breadcrum';
import HomeSlider from './HomeSlider';
import './Home.css'

function Home() {
    return (
    <>
        <div className='app__home'>
            <Breadcrum>Trang chủ</Breadcrum>
            <div className='grid'>
                <div className='row no-gutters'>
                    <div className='col b-12'>
                        <HomeSlider />
                        <div className='home__content'>
                            <h1>Hành trình vươn lên vị trí hàng đầu Liên Quân thế giới của Team Flash</h1>
                            <div className='home__posts'>
                                <div className='home__post'>
                                    <p>
                                    Mùa Đông 2017, ProArmy (tiền thân của Team Flash) lần đầu tiên góp mặt ở đấu trường thế giới.
                                     Sau chức á quân Đấu 
                                     Trường Danh Vọng, họ cùng nhà vô địch GameTV chinh phục AIC.
                                    </p>
                                    <img src='https://sport5.mediacdn.vn/158855217956261888/2021/6/3/elv7924-1563111267752164610169-1622696304432427485638.jpg' alt='img'></img>
                                    <p>Ở đó, ProArmy tiến vào bán kết với màn trình diễn ấn tượng. Chỉ tiếc, đội nhà một lần nữa chạm trán kình địch GameTV và thất bại với tỷ số 0-2. Dẫu vậy, đây vẫn là nỗ lực đáng khích lệ của đại diện Việt Nam khi bước ra sân chơi quốc tế.</p>
                                    <p>Một năm sau, AIC 2018 đánh dấu bước chuyển mình của Team Flash. Chỉ tái lập thành tích á quân của GameTV, nhưng lối đánh từ đội nhà khiến cổ động viên hài lòng. Ở tứ kết, họ đánh bại đương kim vô địch AWC 2018, AHQ. </p>
                                    <p>Tiếp đến, đội nhà còn quật ngã JT (tiền thân của MAD Team) để tiến thẳng vào chung kết tổng. Chiến thắng tuyệt đối 3-0 của Team Flash trước thế lực hàng đầu GCS thay đổi cách nhìn của cộng đồng fan thế giới về Liên Quân Việt Nam. </p>
                                    <img src='https://sport5.mediacdn.vn/158855217956261888/2021/6/3/photo-1-16208956348361558169368-1622737609691712837631.jpg' alt='img'></img>
                                    <p>AOG cuối cùng cũng thi đấu sòng phẳng với mọi đội tuyển. Chưa kể, Team Flash còn tự tin trình diễn lối đánh, tư duy cấm chọn mới mẻ tại giải đấu hàng đầu Liên Quân thế giới. </p>
                                    <p>Và đến mùa Hè 2019, Team Flash đi vào lịch sử Liên Quân Việt Nam và thế giới. Đội nhà bước lên ngôi vô địch AWC sau chặng đường thi đấu xuất sắc. Quan trọng, ngày tái đấu kình địch MAD Team, họ đã đòi lại món nợ 6 tháng trước. </p>
                                    <p>Team Flash vươn lên sánh ngang những ông lớn máu mặt như SMG, AHQ, MAD Team ở sân chơi quốc tế. Trong khi đó, AOG cũng xác lập vị trí mới, dẫn đầu tựa game Liên Quân Mobile. Không những vậy, ADC còn vinh dự được tặng trang phục "Nakroth Quán Quân". Và từ đó, Team Flash luôn được đánh giá cao ở các giải đấu tầm cỡ. </p>
                                    <img alt='img' src='https://sport5.mediacdn.vn/thumb_w/700/158855217956261888/2021/6/7/aic-2019-fl-1-16230339593781704629020.jpg'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default memo(Home);
