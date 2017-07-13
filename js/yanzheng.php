<?php
	$Mobile = $_GET["mobile"];
	$Content = $_GET["content"];
  function NewSms($Mobile,$Content){
        $url="http://service.winic.org:8009/sys_port/gateway/index.asp?";
        $data = "id=%s&pwd=%s&to=%s&content=%s&time=";
        $id = 'kakalaluo';
        $pwd = 'belongtome';
        $to = $Mobile; 
        $content = iconv("UTF-8","GB2312",$Content);
        $rdata = sprintf($data, $id, $pwd, $to, $content);
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_POST,1);
        curl_setopt($ch, CURLOPT_POSTFIELDS,$rdata);
        curl_setopt($ch, CURLOPT_URL,$url);
        curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
    echo NewSms($Mobile,$Content);
    
?>