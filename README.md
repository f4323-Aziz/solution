Merhaba.

Bu repoda nginx klasörü altında "docker-compose up" yapıldığında uygulama localhost:8000 üzerinden minio yayını, localhost:80 üzerinden frontend yayını yapmaktadır.

Bir kez docker-compose up komutunun ardından localhost:8000 den minio uygulamasına bağlantı ile BUCKET, ACCESS_KEY_ID, SECRET_ACCESS_KEY alınıp backend klasöründeki .env dosyasında veri girişi yapıldığında ve ***ENDPOINT kısmına localhost yerine http://public-ip:9000 girildiğinde*** frontend üzerinden, localhost:80 den upload özelliği çalışmaktadır. 

İyi çalışmalar dilerim.
