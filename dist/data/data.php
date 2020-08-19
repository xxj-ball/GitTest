<?php
header("Access-Control-Allow-Origin:*");
header('Content-Type:text/html;charset:utf-8');
$type=$_REQUEST['type'];
$user=$_REQUEST['user'];
$pass=$_REQUEST['pass'];
$tel=$_REQUEST['tel'];

$link=mysqli_connect('localhost','root','root','db');
if(!$link){
    echo ('连接失败:'.mysqli_connect_error());
    die();
}
mysqli_set_charset($link,utf8);

if($type==='add'){
    $add_sql="select * from db_user where phone='$tel'";
    $add_res=mysqli_query($link,$add_sql);
    $add_arr=mysqli_fetch_all($add_res);
    if(count($add_arr)>0){
        echo '{"err":0,"msg":"用户名已被占用"}';
        die();
    }
    $sert_sql= "insert into db_user(phone,pass) values('$tel','$pass')";
    $sert_res=mysqli_query($link,$sert_sql);
    $num = mysqli_affected_rows($link);
    // echo ($num);
    if($num>0){
        echo '{"err":1,"msg":"注册成功"}';
        die();
    }else{
        echo '{"err":2,"msg":"注册失败"}';
        die();
    }
    
}
if($type==='login'){
    $login_sql="select * from db_user where user='$user' and pass='$pass'";
    $login_res=mysqli_query($link,$login_sql);
    $login_arr=mysqli_fetch_all($login_res);
    if(count($login_arr)>0){
        echo '{"err":3,"msg":"登录成功"}';
        die();
    }else{
        echo '{"err":4,"msg":"登录失败"}';
        die();
    }

    
    
}
mysqli_close($link);
?>