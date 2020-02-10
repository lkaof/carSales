# CarSales

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## -----------------------------------------------------------------------

## I- Uygulama Yazma Süreci

1- Daha önce hiç frameworkler ile çalışmadığım için, daha rahat uygulamaya dökebileceğimi düşünerek VUE js öğrenmeye başladım.

2- Sayfalar arası geçiş için route işlemi uyguladım. Ayrı ayrı sayfaları oluşturmaya başladım.

3- VUE Route işlemi sırasında template kısmında yaşadığım sorun sebebiyle sayfaları external olarak import edemedim ve single file component dışında bir çözüm bulamadım.

4- Araştırmalar sonrası AngularJS ile bir çok şeyi daha kontrollü şekilde yapabileceğimi farkettim ve üzerine çalıştım.

5- İlgili sayfaların .ts ve .html dosyalarını oluşturup, ilgili classları app-routing.module.ts içerisinde import edip Routing i aktif ettim.

6- Tüm sayfalarda etkin olabilmesi için bootstrap ve jquery modullerini projeye implemente ettim.

7- ModelsComponent classının içerisine araç modellerinin bulunduğu arrayi oluşturup, bulunan tüm objeleri sayfada çağırdım. Bir modelin seçimi ile birlikte aktif olan event ile seçilen objeyi bir sonraki sayfaya veri olarak aktardım.

8- ColorsComponent içerisinde aktarılan veriyi saklayıp yine renklerin bulunduğu array ile birlikte colors sayfasında gösterimi yapıldı. Renk seçimi ile birlikte daha önceden gelen veri ile yeni seçilen veriyi birleştirip bir sonraki sayfaya aktarımı yapıldı.

9- AccessoriesComponent içerisinde diğer sayfalardan farklı olarak birden fazla objenin saklanması söz konusu idi. Bunu isSelected true/false yapısı ile yaptım. İstenilen aksesuarların seçiminden sonra tamamla işlemi ile birlikte buraya kadar yapılan tüm seçimler summary sayfasına aktarılıyor ve orada tüm bilgiler listeleniyor.

10- Github implementasyonu ile projeyi private repository'e aktardım.

11- Build işlemi yapıp, kişisel sunucumda oluşturduğum subdomainde online sunum için aplikasyonu ayağa kaldırdım.

## II- Eksikler

1- Bilmediğim birçok şey vardı, öğrenmek ve çözümlemek bu kısıtlı zamanda normalden fazla eksiklere sebep oldu.

2- Tasarım tarafında ciddi anlamda eksik söz konusu

3- Test kodu yok

4- Design pattern yok 

## III- Sunum

1- carsales.leventkurt.ninja aderinden online erişilebilir.

2- İlgili kişilerin collobration edilmesinden sonra github üzerinden projeye erişilebilir.

## IV- Kullanım
(not: hatalar yaşanmaması için sırasıyla işlem yapılması gerekmektedir.)

1- Models sayfasında bir model seçilir.

2- Colors sayfasında bir renk seçilir.

3- Accessories sayfasında istenilen paketler seçilir ve tamamla işlemi ile son sayfada seçilen özellikler listelenir.

4- Yeniden seçim yapılmak istendiğinde models sayfasından başlanması gerekmektedir. Aksi senaryolarda önceki sayfalardaki verileri almadan summary sayfasına gidecektir.

## V- Sonuç

Tasarım tarafındaki büyük eksiklerle projeyi teslim ediyorum. Bu konuda üzgünüm. Erol bey ile yapılan görüşmelerde Javascript tarafında bilgim olmadığını fakat konulara adaptasyonumun yüksek ve hızlı olacağını söylemiştim. Projeyi değerlendirirken bunlara dikkat edilmesini rica ediyorum.

İyi çalışmalar -- Levent Kurt

