const { body } = require('express-validator');
const express = require('express');
const router = express.Router();
// const facilityController = require('../controllers/facility.v2.controller');
// const validate = require('../utils/validate.util');

// router.post('/get-category-list', facilityController.getCategoryList);

// router.post(
//     '/get-location-activity-list',
//     validate([
//         body('service_name').notEmpty().withMessage('service_name is required'),
//         body('latitude').notEmpty().withMessage('latitude is required'),
//         body('longitude').notEmpty().withMessage('longitude is required'),
//     ]),
//     facilityController.getLocationActivityList
// );

// router.post(
//     '/get-my-booking',
//     // validate([
//     //     body('group_code').notEmpty().withMessage('group_code is required'),
//     //     body('client_type').notEmpty().withMessage('client_type is required'),
//     //     body('booking_status')
//     //         .notEmpty()
//     //         .withMessage('booking_status is required'),
//     // ]),
//     facilityController.getMyBooking
// );

// router.post(
//     '/get-activity-schedule-date',
//     validate([
//         body('service_id').notEmpty().withMessage('service_id is required'),
//         body('location_id').notEmpty().withMessage('location_id is required'),
//         body('client_type').notEmpty().withMessage('client_type is required'),
//     ]),
//     facilityController.getActivityScheduleDate
// );

// router.post(
//     '/get-activity-schedule-time',
//     validate([
//         body('service_id').notEmpty().withMessage('service_id is required'),
//         body('location_id').notEmpty().withMessage('location_id is required'),
//         body('client_type').notEmpty().withMessage('client_type is required'),
//         body('schedule_date')
//             .notEmpty()
//             .withMessage('schedule_date is required'),
//     ]),
//     facilityController.getActivityScheduleTime
// );

// router.post('/get-activity-banner', facilityController.getActivityBanner);

// router.post(
//     '/get-location-group-detail',
//     validate([
//         body('group_code').notEmpty().withMessage('group_code is required'),
//         body('group_category')
//             .notEmpty()
//             .withMessage('group_category is required'),
//     ]),
//     facilityController.getLocationGroupDetail
// );

// router.post(
//     '/get-location-activity-detail',
//     validate([
//         body('sub_service_id')
//             .notEmpty()
//             .withMessage('sub_service_id is required'),
//     ]),
//     facilityController.getLocationActivityDetail
// );

// router.post(
//     '/get-activity-package-schedule-time',
//     validate([
//         body('service_id').notEmpty().withMessage('service_id is required'),
//         body('location_id').notEmpty().withMessage('location_id is required'),
//         body('schedule_date')
//             .notEmpty()
//             .withMessage('schedule_date is required'),
//         body('client_type').notEmpty().withMessage('client_type is required'),
//     ]),
//     facilityController.getActivityPackageScheduleTime
// );

// router.post(
//     '/make-activity-appointment',
//     validate([
//         // body('schedule_id').notEmpty().withMessage('schedule_id is required'),
//         body('service_id').notEmpty().withMessage('service_id is required'),
//         body('sub_service_id')
//             .notEmpty()
//             .withMessage('sub_service_id is required'),
//         body('location_id').notEmpty().withMessage('location_id is required'),
//         // body('member_address')
//         //     .notEmpty()
//         //     .withMessage('member_address is required'),
//         body('group_code').notEmpty().withMessage('group_code is required'),
//         body('client_type').notEmpty().withMessage('client_type is required'),
//         body('total_customer')
//             .notEmpty()
//             .withMessage('total_customer is required'),
//         // body('email')
//         //     .notEmpty()
//         //     .withMessage('email is required')
//         //     .isEmail()
//         //     .withMessage('email is not valid'),
//     ]),
//     facilityController.makeActivityAppointment
// );

// router.post(
//     '/get-detail-ticket-activity',
//     validate([
//         body('facility_id').notEmpty().withMessage('facility_id is required'),
//     ]),
//     facilityController.getDetailTicketActivity
// );

// // router.post(
// //     '/search-activity',
// //     validate([
// //         body('src_name').notEmpty().withMessage('src_name is required'),
// //     ]),
// //     facilityController.searchActivity
// // );

// router.post(
//     '/get-voucher',
//     validate([
//         body('code_voucher').notEmpty().withMessage('code_voucher is required'),
//     ]),
//     facilityController.getVoucher
// );

// router.post(
//     '/recalculate-pricing',
//     validate([
//         body('amount').notEmpty().withMessage('amount is required'),
//         body('voucher_code').notEmpty().withMessage('voucher_code is required'),
//     ]),
//     facilityController.recalculatePricing
// );

// router.post(
//     '/wallet-payment-channel',
//     // validate([
//     //     body('category').notEmpty().withMessage('category is required'),
//     //     body('order_id').notEmpty().withMessage('order_id is required'),
//     // ]),
//     facilityController.paymentChannel
// );

// router.post(
//     '/get-my-voucher-list',
//     validate([
//         body('status_type').notEmpty().withMessage('status_type is required'),
//     ]),
//     facilityController.getMyVoucherList
// );

// router.post(
//     '/cancel-appointment',
//     validate([
//         body('facility_id').notEmpty().withMessage('facility_id is required'),
//         body('service_id').notEmpty().withMessage('service_id is required'),
//         body('sub_service_id')
//             .notEmpty()
//             .withMessage('sub_service_id is required'),
//         body('location_id').notEmpty().withMessage('location_id is required'),
//     ]),
//     facilityController.cancelAppointment
// );

// router.post(
//     '/get-my-booking-detail',
//     validate([
//         body('facility_id').notEmpty().withMessage('facility_id is required'),
//     ]),
//     facilityController.getMyBookingDetail
// );

// router.post(
//     '/get-payment-status',
//     validate([body('order_id').notEmpty().withMessage('order_id is required')]),
//     facilityController.getPaymentStatus
// );

// router.post(
//     '/get-profile',
//     validate([
//         body('client_type').notEmpty().withMessage('client_type is required'),
//     ]),
//     facilityController.getProfile
// );

// router.post(
//     '/get-address-location',
//     validate([
//         body('latitude').notEmpty().withMessage('latitude is required'),
//         body('longitude').notEmpty().withMessage('longitude is required'),
//     ]),
//     facilityController.getAddressLocation
// );

// router.post(
//     '/remove-voucher',
//     facilityController.removeVoucher
// );

router.get("/", (req, res) => {
    res.json("oke");
})
module.exports = router;
