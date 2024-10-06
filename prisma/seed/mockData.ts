import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('c13070ed-dadb-467e-8067-b5e589967017', '1Ashly_Zulauf@gmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=3', 'stu901vwx234', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('1a1c5193-ad02-46e2-872d-8cb15bf059fc', '10Reba.Adams@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=12', 'abc123def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ede79115-1b1c-404b-b8bd-fcb953bad7b7', '19Larry_Murazik@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=21', 'yz567abc890', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e1951d55-bbdb-468f-ac28-42fe521ee877', '28Mayra.Schmidt69@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=30', 'abc123def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('a1f13f58-c181-4d7b-8baa-2ff75af2c631', '37Mya_Turcotte@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=39', 'stu901vwx234', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('e98b4092-3a50-4d97-bcd7-e7ee21567f0e', '46Keshaun98@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=48', 'abc123def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('11da2059-a37b-41b4-86ef-60b4cf1c3a8b', '55Benjamin24@hotmail.com', 'Emily Brown', 'https://i.imgur.com/YfJQV5z.png?id=57', 'mno345pqr678', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('a7ec3902-643a-4c6f-b025-dd91e8b46c1f', '64Gilda.Bailey74@hotmail.com', 'John Doe', 'https://i.imgur.com/YfJQV5z.png?id=66', 'stu901vwx234', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('cfe22a4e-02c5-46f7-a796-b86009e2b6fb', '73Milan_Medhurst@hotmail.com', 'Michael White', 'https://i.imgur.com/YfJQV5z.png?id=75', 'ghi789jkl012', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('fa31bb14-4380-4645-b5dd-57b5e13e82f2', 'Fitness Journey', 'Keep a log of books read throughout the year.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('b1ccc3d0-e3aa-4df4-985c-b0117ca461dd', 'Fitness Journey', 'Track your daily workouts and fitness goals.', 'e1951d55-bbdb-468f-ac28-42fe521ee877');
INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('d92126cb-4043-41b9-b092-24384e918c76', 'Fitness Journey', 'Keep a log of books read throughout the year.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('2727d298-9f94-4bb9-856a-7402ca258f6b', 'Home Renovation', 'Track your daily workouts and fitness goals.', '11da2059-a37b-41b4-86ef-60b4cf1c3a8b');
INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('62265a65-d3f9-4627-8087-6def7a6ea237', 'Fitness Journey', 'Follow your progress through a coding bootcamp curriculum.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('2b779ca0-bafc-40b7-8bd5-1dc316bff5c0', 'Home Renovation', 'Track your daily workouts and fitness goals.', 'a1f13f58-c181-4d7b-8baa-2ff75af2c631');
INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('ee9537b7-b18a-4e52-916e-fa9b400d0bd6', 'Product Launch', 'Organize and monitor progress on home improvement projects.', 'e1951d55-bbdb-468f-ac28-42fe521ee877');
INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('951fa257-8b80-43f3-bf5b-6f518eb6dc3b', 'Product Launch', 'Manage tasks and deadlines for the upcoming product release.', 'cfe22a4e-02c5-46f7-a796-b86009e2b6fb');
INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('c55faac5-d959-4ee5-9352-31f616e8e839', 'Coding Bootcamp', 'Track your daily workouts and fitness goals.', 'a1f13f58-c181-4d7b-8baa-2ff75af2c631');
INSERT INTO "Project" ("id", "name", "description", "ownerUserId") VALUES ('b4156c12-2de3-45ee-aa40-a7c7282f1fbb', 'Home Renovation', 'Organize and monitor progress on home improvement projects.', 'cfe22a4e-02c5-46f7-a796-b86009e2b6fb');

INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('d16cfcac-7638-4e62-99ca-496537d256db', 'Task Completion', 'Monitor the progress of the project phases.', 'CountBased Track', 290, 518, '2024-10-12T20:11:06.770Z', '2025-10-04T21:34:45.325Z', '2b779ca0-bafc-40b7-8bd5-1dc316bff5c0');
INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('a1dd7840-d719-48e4-b26d-f0f0206860e3', 'Project Timeline', 'Monitor the progress of the project phases.', 'TimeBased Track', 670, 875, '2024-11-15T01:45:02.367Z', '2025-06-04T00:22:19.222Z', 'fa31bb14-4380-4645-b5dd-57b5e13e82f2');
INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('a368f932-10df-41d3-9335-7c8609cc786e', 'Reading Challenge', 'Track the number of books read this year.', 'TimeBased Track', 751, 510, '2024-02-24T22:28:34.036Z', '2025-03-01T22:42:39.471Z', '2b779ca0-bafc-40b7-8bd5-1dc316bff5c0');
INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('20d6471f-6ff3-4c44-b412-be651345aad1', 'Project Timeline', 'Track the number of books read this year.', 'TimeBased Track', 380, 688, '2025-05-11T23:48:51.966Z', '2025-02-21T13:42:46.249Z', '951fa257-8b80-43f3-bf5b-6f518eb6dc3b');
INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('f239d9f4-a2cb-4d94-93a7-7daa33624fe3', 'Project Timeline', 'Achieve key learning objectives.', 'CountBased Track', 258, 986, '2025-10-01T12:26:33.144Z', '2023-11-15T16:29:55.926Z', 'd92126cb-4043-41b9-b092-24384e918c76');
INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('5f84e208-86c1-46f9-bf3f-0b15fa2afa8e', 'Project Timeline', 'Complete all assigned tasks for the project.', 'TimeBased Track', 580, 294, '2024-09-17T23:58:52.193Z', '2023-11-06T06:27:13.509Z', 'fa31bb14-4380-4645-b5dd-57b5e13e82f2');
INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('a52dac26-4480-46f9-ab7f-a172f2a7954c', 'Fitness Goals', 'Complete all assigned tasks for the project.', 'TaskBased Track', 902, 527, '2024-03-10T08:40:30.505Z', '2025-04-13T08:01:19.485Z', 'b1ccc3d0-e3aa-4df4-985c-b0117ca461dd');
INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('63b6d4e6-07d9-4951-a8ee-7beeba3bea96', 'Project Timeline', 'Monitor the progress of the project phases.', 'TaskBased Track', 720, 457, '2024-04-19T05:05:32.385Z', '2023-11-29T23:35:10.488Z', 'd92126cb-4043-41b9-b092-24384e918c76');
INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('94a274f1-66c1-4852-a5bf-a96777dc86ca', 'Learning Milestones', 'Complete all assigned tasks for the project.', 'CountBased Track', 941, 299, '2024-07-31T08:02:31.795Z', '2024-09-15T23:41:09.546Z', '951fa257-8b80-43f3-bf5b-6f518eb6dc3b');
INSERT INTO "Track" ("id", "name", "description", "trackType", "targetValue", "currentValue", "startDate", "endDate", "projectId") VALUES ('256b69d0-6321-4921-9206-0de79f83f75b', 'Reading Challenge', 'Keep track of weekly workout sessions.', 'CountBased Track', 233, 105, '2024-05-20T08:06:32.157Z', '2024-08-09T06:15:13.591Z', 'd92126cb-4043-41b9-b092-24384e918c76');

INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('15715079-0420-43b9-b315-25fd05c298b2', 'Review the quarterly financial report', true, '5f84e208-86c1-46f9-bf3f-0b15fa2afa8e');
INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('c3bb6ca4-2030-4fad-bec1-89c1797d5a1c', 'Complete the project proposal document', false, '94a274f1-66c1-4852-a5bf-a96777dc86ca');
INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('9a5ed6e0-e6ff-4175-b302-414909e9bc52', 'Update the client presentation slides', false, '256b69d0-6321-4921-9206-0de79f83f75b');
INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('ab96e0c0-cde4-481c-ae18-4d9992d4cdb1', 'Update the client presentation slides', true, '63b6d4e6-07d9-4951-a8ee-7beeba3bea96');
INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('e6201c4b-bb6d-4651-97dc-62ed10a13edb', 'Complete the project proposal document', true, 'a1dd7840-d719-48e4-b26d-f0f0206860e3');
INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('4e7424bd-bda0-41e1-ba21-c895e4b13a3f', 'Review the quarterly financial report', true, '63b6d4e6-07d9-4951-a8ee-7beeba3bea96');
INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('f57c296a-e025-423a-8d29-fbb5e596cee8', 'Submit the code review feedback', false, 'd16cfcac-7638-4e62-99ca-496537d256db');
INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('018878af-c166-4356-98b4-5adbefa8ac9a', 'Update the client presentation slides', true, 'a1dd7840-d719-48e4-b26d-f0f0206860e3');
INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('05e48373-b9b3-4c7b-839b-2f8f1ab10123', 'Complete the project proposal document', false, '63b6d4e6-07d9-4951-a8ee-7beeba3bea96');
INSERT INTO "Task" ("id", "description", "isCompleted", "trackId") VALUES ('e4b9803a-d6cf-429b-8004-f5469b924a5d', 'Update the client presentation slides', false, 'f239d9f4-a2cb-4d94-93a7-7daa33624fe3');

INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('fa0c0319-4996-4319-b6c1-a592596c19da', 'Editor', '2727d298-9f94-4bb9-856a-7402ca258f6b', 'e98b4092-3a50-4d97-bcd7-e7ee21567f0e');
INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('e23657a0-4169-46fb-8601-26fff2466ef9', 'Editor', 'ee9537b7-b18a-4e52-916e-fa9b400d0bd6', '11da2059-a37b-41b4-86ef-60b4cf1c3a8b');
INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('ce63888f-76dc-4b66-b2e9-90b93048acd0', 'Owner', 'b1ccc3d0-e3aa-4df4-985c-b0117ca461dd', 'e1951d55-bbdb-468f-ac28-42fe521ee877');
INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('c347f6dd-e23e-4d64-a8e6-9c776a144973', 'Manager', '2b779ca0-bafc-40b7-8bd5-1dc316bff5c0', 'ede79115-1b1c-404b-b8bd-fcb953bad7b7');
INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('4be874c4-3010-4182-be53-07b1799ee5a6', 'Editor', 'b4156c12-2de3-45ee-aa40-a7c7282f1fbb', '11da2059-a37b-41b4-86ef-60b4cf1c3a8b');
INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('cee11d19-fa8d-44b1-bf6c-761b8864ce96', 'Owner', 'fa31bb14-4380-4645-b5dd-57b5e13e82f2', 'ede79115-1b1c-404b-b8bd-fcb953bad7b7');
INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('ae68a1cb-2d71-4e8f-b4ba-7d042093da7d', 'Editor', '951fa257-8b80-43f3-bf5b-6f518eb6dc3b', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('ac469a5e-0548-47b8-9e31-3f307ef7d9b8', 'Viewer', '62265a65-d3f9-4627-8087-6def7a6ea237', '11da2059-a37b-41b4-86ef-60b4cf1c3a8b');
INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('d189c4eb-5bc0-4037-98c1-cc59013d4cf3', 'Manager', '62265a65-d3f9-4627-8087-6def7a6ea237', 'a7ec3902-643a-4c6f-b025-dd91e8b46c1f');
INSERT INTO "ProjectCollaborator" ("id", "role", "projectId", "userId") VALUES ('ce62a737-3f87-4305-8dbe-00a9c2572e7d', 'Manager', '2b779ca0-bafc-40b7-8bd5-1dc316bff5c0', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('ef6f0765-f8e2-47a0-8d92-c44bf177fb4d', 237, '2025-07-18T11:57:38.842Z', '94a274f1-66c1-4852-a5bf-a96777dc86ca');
INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('f2092978-9ed5-4473-89fd-4a7919122bef', 474, '2024-01-01T11:18:54.175Z', '20d6471f-6ff3-4c44-b412-be651345aad1');
INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('f4ff8b0b-7244-45b9-9dfe-4acf7e51647c', 742, '2025-09-18T08:12:14.350Z', '94a274f1-66c1-4852-a5bf-a96777dc86ca');
INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('8af026e6-e7e8-4706-b790-59ae1c6a0d55', 225, '2024-01-01T12:41:27.384Z', 'f239d9f4-a2cb-4d94-93a7-7daa33624fe3');
INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('e21846c6-4e54-4981-9970-6cdf4d7da41c', 379, '2025-07-18T01:06:07.091Z', 'd16cfcac-7638-4e62-99ca-496537d256db');
INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('ddd38f21-7018-48f1-b113-fcb97ea99956', 542, '2025-06-15T18:23:23.062Z', '94a274f1-66c1-4852-a5bf-a96777dc86ca');
INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('479b6f49-f3b1-4504-950f-5f3af8c46a73', 265, '2025-06-14T23:18:13.635Z', 'a368f932-10df-41d3-9335-7c8609cc786e');
INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('06160045-f863-4bc8-903e-a93a8b7d7f36', 811, '2023-10-13T10:52:41.364Z', 'a1dd7840-d719-48e4-b26d-f0f0206860e3');
INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('e6d0a22f-c6c4-4019-aea5-2f1ff298b21b', 550, '2023-10-14T18:45:43.542Z', '63b6d4e6-07d9-4951-a8ee-7beeba3bea96');
INSERT INTO "TrackProgress" ("id", "progressValue", "dateRecorded", "trackId") VALUES ('a33abae8-905e-4e54-adca-85482cb28be3', 681, '2024-07-20T13:03:17.506Z', 'a52dac26-4480-46f9-ab7f-a172f2a7954c');

INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('36c8bc5b-f8ee-4bc9-b74f-d29ab6d0bee2', 'k9l8j7h6g5f4d3s2a1p0', false, 'c13070ed-dadb-467e-8067-b5e589967017');
INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('d980ca46-61f6-4da2-95c0-11665311ce05', 'a1b2c3d4e5f6g7h8i9j0', true, '1a1c5193-ad02-46e2-872d-8cb15bf059fc');
INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('d47c28ca-c969-487a-8811-1b29cd653a07', 'k9l8j7h6g5f4d3s2a1p0', true, '1a1c5193-ad02-46e2-872d-8cb15bf059fc');
INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('c0c10036-46e6-4850-b359-216e5709b9e9', 'k9l8j7h6g5f4d3s2a1p0', true, 'c13070ed-dadb-467e-8067-b5e589967017');
INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('4ce00a39-981f-4b8a-a592-9ac4ea9deb10', 'p0o9i8u7y6t5r4e3w2q1', false, 'ede79115-1b1c-404b-b8bd-fcb953bad7b7');
INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('b19b1ce3-31d1-4804-9427-d4d4f3ff816a', 'p0o9i8u7y6t5r4e3w2q1', false, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('5dcfc7e1-9384-40fe-a3a0-a468417c4b77', 'p0o9i8u7y6t5r4e3w2q1', false, 'e98b4092-3a50-4d97-bcd7-e7ee21567f0e');
INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('de8f70ad-054d-4a79-a5c5-9b47691b0942', 'p0o9i8u7y6t5r4e3w2q1', false, 'c13070ed-dadb-467e-8067-b5e589967017');
INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('fd560368-2eb6-45de-bf0b-65285966cfcc', 'k9l8j7h6g5f4d3s2a1p0', true, '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "ApiKey" ("id", "apiKeyValue", "isRevoked", "userId") VALUES ('797875e9-1232-4e33-bc2b-33d9a9aa8ef9', 'p0o9i8u7y6t5r4e3w2q1', true, 'e98b4092-3a50-4d97-bcd7-e7ee21567f0e');

INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('5c4b89a6-1cf9-4f13-a2a0-184f35dd415c', 'Light Breeze', 'padding 10px 20px margin 5px', 'e1951d55-bbdb-468f-ac28-42fe521ee877');
INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('a00186ac-fe00-4261-9ca7-3f14d1ba569d', 'Forest Green', 'fontsize 14px color 333', 'e98b4092-3a50-4d97-bcd7-e7ee21567f0e');
INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('19093cb6-0f7d-4eb0-ba95-576060486967', 'Sunset Glow', 'padding 10px 20px margin 5px', '1a1c5193-ad02-46e2-872d-8cb15bf059fc');
INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('8b29788c-772b-47d0-864e-761f3e5b8ee1', 'Dark Mode', 'backgroundcolor f0f0f0 borderradius 5px', 'e1951d55-bbdb-468f-ac28-42fe521ee877');
INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('ac43922c-8686-4366-b98b-8cd4015035d2', 'Light Breeze', 'padding 10px 20px margin 5px', 'a1f13f58-c181-4d7b-8baa-2ff75af2c631');
INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('2dcddf27-c09d-4998-8b30-eac6bb2a20c4', 'Forest Green', 'fontsize 14px color 333', '1a1c5193-ad02-46e2-872d-8cb15bf059fc');
INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('cf708dc4-95d5-44e7-bc14-63e8af339e8e', 'Sunset Glow', 'backgroundcolor f0f0f0 borderradius 5px', 'ede79115-1b1c-404b-b8bd-fcb953bad7b7');
INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('3f70820b-aba0-4075-8701-ba98e57c25f6', 'Ocean Blue', 'backgroundcolor f0f0f0 borderradius 5px', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('8531cd9e-d946-43fd-ba26-badcb0665474', 'Dark Mode', 'textalign center fontweight bold', '11da2059-a37b-41b4-86ef-60b4cf1c3a8b');
INSERT INTO "UserPreference" ("id", "themeName", "customStyles", "userId") VALUES ('1c8ca993-aa15-4e3e-96db-d8c0d8cd5f76', 'Forest Green', 'padding 10px 20px margin 5px', 'c13070ed-dadb-467e-8067-b5e589967017');

INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('609766df-2a7a-42e6-80fe-c18e383ccb34', '341Roderick.Spinka64@yahoo.com', 'p0o9i8u7y6t5r4e3w2q1', 'revoked', 'b4156c12-2de3-45ee-aa40-a7c7282f1fbb', '11da2059-a37b-41b4-86ef-60b4cf1c3a8b');
INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('36b3262f-bf34-4cb2-9cc7-295507f7aed3', '345Danika_Cruickshank68@gmail.com', 'p0o9i8u7y6t5r4e3w2q1', 'expired', 'fa31bb14-4380-4645-b5dd-57b5e13e82f2', 'ede79115-1b1c-404b-b8bd-fcb953bad7b7');
INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('b22c1f7d-51d4-470b-bc68-03604a6cbd0f', '349Carmela35@gmail.com', 'p0o9i8u7y6t5r4e3w2q1', 'pending', 'b1ccc3d0-e3aa-4df4-985c-b0117ca461dd', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('717747e4-6db8-49da-b8d0-7aa1fdd3d293', '353Gayle.Sanford-Hilll@gmail.com', 'n0m9l8k7j6h5g4f3d2s1', 'revoked', 'b4156c12-2de3-45ee-aa40-a7c7282f1fbb', 'e98b4092-3a50-4d97-bcd7-e7ee21567f0e');
INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('98484620-6c3f-4491-a3d3-73cca6651d01', '357Dock13@yahoo.com', 'b0v9c8x7z6a5s4d3f2g1', 'expired', 'b4156c12-2de3-45ee-aa40-a7c7282f1fbb', 'a1f13f58-c181-4d7b-8baa-2ff75af2c631');
INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('0973f7e6-4767-411c-aff8-5f1a13d3572e', '361Cade5@hotmail.com', 'p0o9i8u7y6t5r4e3w2q1', 'declined', '2b779ca0-bafc-40b7-8bd5-1dc316bff5c0', '1a1c5193-ad02-46e2-872d-8cb15bf059fc');
INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('a19c8534-bae7-42fa-8526-a45c4c315496', '365Zakary10@gmail.com', 'p0o9i8u7y6t5r4e3w2q1', 'accepted', '2b779ca0-bafc-40b7-8bd5-1dc316bff5c0', 'ede79115-1b1c-404b-b8bd-fcb953bad7b7');
INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('7e7fe468-0ccd-4806-8c21-bac5c88d633f', '369Norene_Franey2@yahoo.com', 'z9y8x7w6v5u4t3s2r1q0', 'revoked', '2727d298-9f94-4bb9-856a-7402ca258f6b', 'ede79115-1b1c-404b-b8bd-fcb953bad7b7');
INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('ede849d4-8ee1-489f-bc05-da80877a3f1d', '373Wilma.Jones@gmail.com', 'n0m9l8k7j6h5g4f3d2s1', 'accepted', '2b779ca0-bafc-40b7-8bd5-1dc316bff5c0', 'e1951d55-bbdb-468f-ac28-42fe521ee877');
INSERT INTO "Invitation" ("id", "inviteeEmail", "token", "status", "projectId", "inviterUserId") VALUES ('8836ca5a-de44-44df-b2cd-6c2b0d598afa', '377Amparo.Durgan95@hotmail.com', 'a1b2c3d4e5f6g7h8i9j0', 'expired', 'c55faac5-d959-4ee5-9352-31f616e8e839', 'ede79115-1b1c-404b-b8bd-fcb953bad7b7');

INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('08652cbe-10f5-4dcf-9453-3f4ab167a2cf', 'Push Notification', false, 446, 'e1951d55-bbdb-468f-ac28-42fe521ee877', '2727d298-9f94-4bb9-856a-7402ca258f6b', 'd16cfcac-7638-4e62-99ca-496537d256db');
INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('176f3be8-f397-443b-8bce-fca34a7d6272', 'Email', true, 595, 'a7ec3902-643a-4c6f-b025-dd91e8b46c1f', '951fa257-8b80-43f3-bf5b-6f518eb6dc3b', 'a368f932-10df-41d3-9335-7c8609cc786e');
INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('66051c07-59eb-49c8-9cc6-6d5aa375f4d1', 'InApp Alert', true, 831, 'a1f13f58-c181-4d7b-8baa-2ff75af2c631', '2b779ca0-bafc-40b7-8bd5-1dc316bff5c0', 'd16cfcac-7638-4e62-99ca-496537d256db');
INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('c9a5ebcd-6fff-4379-9d24-45629546b74d', 'SMS', false, 312, 'c13070ed-dadb-467e-8067-b5e589967017', 'c55faac5-d959-4ee5-9352-31f616e8e839', '63b6d4e6-07d9-4951-a8ee-7beeba3bea96');
INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('014831b8-8b51-4c6b-b73e-11f472d67e3d', 'Email', false, 249, 'cfe22a4e-02c5-46f7-a796-b86009e2b6fb', 'fa31bb14-4380-4645-b5dd-57b5e13e82f2', 'a1dd7840-d719-48e4-b26d-f0f0206860e3');
INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('b85709d3-c43b-4b66-828b-8c1cd6e90d29', 'Push Notification', false, 765, '11da2059-a37b-41b4-86ef-60b4cf1c3a8b', 'b4156c12-2de3-45ee-aa40-a7c7282f1fbb', 'f239d9f4-a2cb-4d94-93a7-7daa33624fe3');
INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('7c4f0ecf-610c-4512-8cff-a13c2e7ef8c4', 'Webhook', true, 987, 'a7ec3902-643a-4c6f-b025-dd91e8b46c1f', 'c55faac5-d959-4ee5-9352-31f616e8e839', 'a368f932-10df-41d3-9335-7c8609cc786e');
INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('f1c30aef-eff5-429f-93fd-405bd5111c63', 'SMS', true, 664, 'e98b4092-3a50-4d97-bcd7-e7ee21567f0e', '2b779ca0-bafc-40b7-8bd5-1dc316bff5c0', '256b69d0-6321-4921-9206-0de79f83f75b');
INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('21db586d-c887-4e00-8806-ac47aa98b9c3', 'Webhook', false, 161, 'cfe22a4e-02c5-46f7-a796-b86009e2b6fb', 'b1ccc3d0-e3aa-4df4-985c-b0117ca461dd', 'a368f932-10df-41d3-9335-7c8609cc786e');
INSERT INTO "NotificationSetting" ("id", "notificationType", "isEnabled", "thresholdPercentage", "userId", "projectId", "trackId") VALUES ('287e5c44-f884-4053-82c2-87cbc70e4c7a', 'InApp Alert', false, 214, 'e1951d55-bbdb-468f-ac28-42fe521ee877', 'fa31bb14-4380-4645-b5dd-57b5e13e82f2', '63b6d4e6-07d9-4951-a8ee-7beeba3bea96');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
