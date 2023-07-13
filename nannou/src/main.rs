use nannou::prelude::*;

fn main() {
    nannou::sketch(view).run();
}

fn view(app: &App, frame: Frame) {
    let draw = app.draw();

    draw.background().color(BLUE);

    let rects = create_rects();
    for r in rects {
        let c = rgb(random_f32(), random_f32(), random_f32());
        draw.rect().xy(r.xy()).wh(r.wh()).color(c);
    }

    draw.to_frame(app, &frame).unwrap();
}

fn create_rect(x: i32, y: i32) -> Rect {
    // Total 1024x768px, 16:12
    // Let's make a bunch of 64x64px
    let l = 64.0;
    return Rect::from_x_y_w_h(x as f32 * l + 32.0, y as f32 * l + 32.0, l, l);
}

fn create_rects() -> Vec<Rect> {
    const XS: std::ops::Range<i32> = -8..8;
    const YS: std::ops::Range<i32> = -6..6;

    return XS
        .map(|x| YS.map(move |y| create_rect(x, y)))
        .flatten()
        .collect();
}
