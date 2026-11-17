/* =====================================================================
   PHIM TƯ LIỆU – CHỦ ĐỀ 1        (đặt tại: video/cd1/captions.js)
   ---------------------------------------------------------------------
   Mỗi phim là một entry trong mảng "videos"; phim hiển thị đúng theo thứ tự
   các entry (không cần đặt tên 1.mp4, 2.mp4, ... và không dò theo thứ tự số).
   Mỗi phim tự chọn nguồn riêng:

     { source: "local",   file: "ten-phim.mp4", caption: "..." }   -> tệp trong thư mục "dir"
     { source: "youtube", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX", caption: "..." }

   - local  : "file" là tên tệp (ghép với "dir"), hoặc đường dẫn đầy đủ có dấu "/"
              (ví dụ "video/khac/abc.mp4").
   - youtube: "url" nhận link watch, youtu.be, embed, shorts hoặc mã 11 ký tự.
   - Viết gọn: "abc.mp4" (tự hiểu là local) hoặc "https://youtu.be/XXXXXXXXXXX" (tự hiểu là YouTube).

   Chú thích:
   - Viết ngay trong từng phim ("caption"), hoặc trong "captions" với khóa "N" = phim thứ N
     của mảng "videos" (chú thích trong phim được ưu tiên).
   - \n = xuống dòng; từ chữ "Nguồn" trở đi được in đậm.
   ===================================================================== */
window.CD1_VIDEO_CONFIG = {

  dir: "video/cd1/",            // thư mục chứa các phim local (viết "video\\cd1" cũng được)

  videos: [
    // { source: "local",   file: "ten-phim-1.mp4", caption: "Chú thích phim 1.\nNguồn: ..." },
    { source: "youtube", url: "https://www.youtube.com/watch?v=eONB3Lx8iqk", caption: "Nguyễn Ái Quốc - Ẩn số từ nước Pháp - VTV Đặc biệt\nBộ phim do ê kíp Ban Truyền hình Đối ngoại Đài Truyền hình Việt Nam thực hiện. Đoàn phim đã khám phá nhiều tài liệu và câu chuyện ít ai biết về Chủ tịch Hồ Chí Minh giai đoạn ở Pháp từ năm 1919 đến 1923. Những hoạt động của Người trong giai đoạn ấy mang tính lịch sử, tạo tiền đề cho đường lối sau này cũng như chiến thắng trong Cách mạng tháng Tám." },
	{ source: "youtube", url: "https://www.youtube.com/watch?v=x3m2CvUB4co", caption: "Phim tài liệu “Nguyễn Ái Quốc, Hồ Chí Minh – Hành trình đi tìm hình của Nước”\n\"Hành trình đi tìm hình của nước\" là phim tài liệu lịch sử đặc biệt do VTV sản xuất. Phim tái hiện chân thực hành trình bôn ba cứu nước của lãnh tụ Nguyễn Ái Quốc; đồng thời khai thác sâu chuỗi tư liệu, bút tích gốc quý giá, kết hợp góc nhìn từ các chuyên gia quốc tế, tác phẩm làm rõ bước ngoặt tư tưởng của Người khi tiếp cận Luận cương Lênin. Qua đó, bộ phim khắc họa hành trình tìm ra con đường giải phóng dân tộc, thành lập Đảng và dẫn dắt nước Việt Nam đến ngày độc lập 2/9/1945." },
	{ source: "youtube", url: "https://www.youtube.com/watch?v=TylTPa9ZO0E", caption: "Phim tài liệu “Hồ Chí Minh - Theo dấu chân người”\nPhim kể về quá trình hoạt động cách mạng của lãnh tụ Nguyễn Ái Quốc – Hồ Chí Minh trong giai đoạn từ năm 1939 đến năm 1945." }
    // "ten-phim-3.mp4",
    // "https://youtu.be/YYYYYYYYYYY",
  ],

  // Chú thích theo số thứ tự (không bắt buộc)
  captions: {
    // "1": "Chú thích phim 1.\nNguồn: ...",
  }
};
