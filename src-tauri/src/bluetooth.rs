use uuid::{uuid, Uuid};
use tauri_plugin_blec::models::WriteType;

const CHARACTERISTIC_UUID: Uuid = uuid!("51FF12BB-3ED8-46E5-B4F9-D64E2FEC021B");
const DATA: [u8; 500] = [0; 500];

#[tauri::command]
pub async fn send_bluetooth_data() {
    let handler = tauri_plugin_blec::get_handler().unwrap();
    handler
        .send_data(CHARACTERISTIC_UUID, &DATA, WriteType::WithResponse)
        .await
        .unwrap();
}