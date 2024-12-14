<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

require_once '../config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $stmt = $pdo->prepare('
        INSERT INTO appointments 
        (user_id, first_name, last_name, email, phone, brand, model, year, appointment_date, appointment_time, service)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ');
    
    try {
        $stmt->execute([
            $data['userId'],
            $data['firstName'],
            $data['lastName'],
            $data['email'],
            $data['phone'],
            $data['brand'],
            $data['model'],
            $data['year'],
            $data['date'],
            $data['time'],
            $data['service']
        ]);
        
        echo json_encode([
            'success' => true,
            'message' => 'Appointment scheduled successfully',
            'appointmentId' => $pdo->lastInsertId()
        ]);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(['success' => false, 'message' => 'Failed to schedule appointment']);
    }
}
?>