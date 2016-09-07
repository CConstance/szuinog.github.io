function register()
{
    var name=$('#name').val();
    var stu_no=$('#stu_no').val();
    var phone=$('#phone').val();
    var gender=$('input:radio[name="gender"]:checked').val();
    var college=$('#college').val();
    var grade=$('#grade').val();
    var self=$('#self').val();
    var APP_ID = 'gdFiMPNVw0j3MsqDIpaJhfAP-gzGzoHsz';
    var APP_KEY = 'gO1iivAQKFgPmbTMGKRsL0Tm';
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
    var Member = AV.Object.extend('Member');
    var member = new Member();
    member.set('name', name);
    member.set('stu_no',stu_no);
    member.set('phone',phone);
    member.set('gender',gender);
    member.set('college',college);
    member.set('grade',grade);
    member.set('self',self);
    member.set('status','Waiting for interview');
    member.save().then(function (todo) {
        alert('注册成功！请等待后续通知。');
    }, function (error) {
        alert('注册失败，您可发送邮件至contact@zhitan.tech');
    });

}