import { Col, Container, Row } from "react-bootstrap";
import {
	DocumentsContainer,
	DocumentText,
	Dot,
	ResourcesContainer,
	Resource,
	ResourceLogo,
	ExitButton,
	HeaderContainer,
} from "./documents-styles";
import InitCode from "../../../assets/code-init.png";
import initFormat from "../../../assets/initFormat.png";
import Vision from "../../../assets/vision.png";
import Code from "./Code/Code";

function Documents() {
	return (
		<>
			<Container fluid>
				<Row>
					<Col md={12}>
						<DocumentsContainer>
							<HeaderContainer>
								<h2> مستندات بازی</h2>
								<ExitButton>
									<a
										href="https://iutbox.iut.ac.ir/index.php/s/bt8dWwrFyN7PReC"
										style={{
											textDecoration: "none",
											color: "white",
										}}
									>
										دانلود منابع بازی
									</a>
								</ExitButton>
							</HeaderContainer>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>داستان و هدف بازی</h4>
										در این بازی شما کنترل یک فضانورد را به
										دست می‌گیرید. شما مقابل فضانورد تیم حریف
										در یک نقشه M*N (اندازه نقشه متغیر است)
										بازی می‌کنید. هدف نهایی وارد کردن
										بیشترین خسارت و کاهش سلامتی فضانورد تیم
										مقابل است.
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>خانه های نقشه</h4>
										هر خانۀ این نقشه ممکن است خالی یا شامل
										اشیائی باشد. اگر خانه ای خالی باشد
										فضانورد به راحتی میتواند در آن خانه حرکت
										کند. اشیاء عبارتند از:
										<ul>
											<li>
												دیوار:‌ فضانوردان نمی‌توانند
												وارد این خانه‌ها شوند. همچنین
												انفجار از آن‌ها عبور نمی‌کند.
											</li>
											<li>
												جعبه: فضانوردان نمی‌توانند وارد
												این خانه‌ها شوند. در صورتی که
												شعاع انفجار یک بمب به یک جعبه
												برسد جعبه نابود می‌شود و هر جعبه
												میتواند خالی و یا شامل یک ارتقاء
												باشد.
											</li>
											<li>
												ارتقا‌ها:
												<ul>
													<li>
														تکنولوژی بمب: باعث
														افزایش شعاع انفجار
														(تعداد خانه‌های آسیب
														زننده پس از انفجار بمب)
														می‌شود.
													</li>
													<li>
														معجون زندگی: باعث افزایش
														سطح سلامتی فضانورد
														می‌شود.
													</li>
													<li>
														تله: یک تله به تله‌های
														فضانورد اضافه می‌شود.
													</li>
												</ul>
											</li>
											<li>
												تله: تله‌ها برای فضانوردان قابل
												مشاهده نیستند (حتی تله‌هایی که
												خودشان کار گذاشته‌اند) و در صورت
												حرکت روی خانه ای که تله در آن
												قرار دارد، فضانورد آسیب می‌بیند.
											</li>
											<li>
												بمب: بمب‌ها توسط فضانوردان کاشته
												می‌شوند و پس از مدتی منفجر
												می‌شوند. هر فضانوردی که در شعاع
												انفجار بمب قرار داشته باشد (حتی
												فضانوردی که خودش بمب را کار
												گذاشته است) آسیب می‌بیند.
											</li>
										</ul>
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h3>اعمال فضانوردان</h3>
										در هر مرحله نوبت یک فضانورد است که عملی
										را انجام دهد. اعمال قابل انتخاب شامل:
										<ul>
											<li>حرکت به چهار جهت</li>
											<li>
												ایستادن در جای قبلی (بدون حرکت)
											</li>
											<li>کاشتن بمب</li>
											<li>گذاشتن تله</li>
											می‌باشد.
										</ul>
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h3>ترتیب رخدادها</h3>
										در هر مرحله ابتدا تاثیر عمل انتخاب شده
										فضانورد اعمال می‌شود، سپس اگر فضانورد به
										خانه‌ای که شامل ارتقاء است وارد شود، آن
										ارتقاء به صورت خودکار برای او برداشته
										می‌شود. سپس بمب‌هایی که موعد انفجارشان
										رسیده است منفجر می‌شوند. پس از آن اگر
										فضانورد وارد خانه‌ای شده باشد که در آن
										تله گذاشته شده باشد (چه از طرف خودش چه
										از طرف فضانورد تیم مقابل) آن تله فعال
										می‌شود. پس از آن تغییرات منطقه مرگ اتفاق
										می‌افتد و چنانچه فضانوردی در آن باشد،
										آسیب می‌بیند. دقت کنید که در هر نوبت
										حداکثر یک بار آسیب می‌بیند. مثلا اگر
										فضانوردی در شعاع انفجار دو بمب باشد و
										همزمان در منطقه مرگ باشد فقط یک مرتبه
										(یک جان) سطح سلامتی‌اش کاهش می‌یابد.
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h3>انفجار بمب‌ها</h3>
										هر بمب شعاع انفجار مشخصی دارد. این شعاع
										انفجار بستگی به سطح تکنولوژی بمب فضانورد
										هنگام کاشتن آن بمب دارد. اگر بمب دیگری
										در شعاع انفجار بمب منفجر شده قرار گرفته
										باشد، در همان نوبت منفجر می‌شود. تعداد
										بمب های منفجر شده در هر نوبت محدودیتی
										ندارد. بمب‌ها باعث فعالسازی تله‌ای
										نخواهند شد.
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h3>دید فضانورد (ویژن)</h3>
										هر فضانورد نسبت به نقشه‌ای که در آن قرار
										دارد، دید محدودی خواهد داشت. به این صورت
										که در هر نوبت، فضانورد فقط خانه‌هایی که
										در فاصلۀ منهتنی مشخصی (از محل کنونی او)
										قرار دارند را می‌تواند ببیند. یک نمونه
										دید فضانورد با فاصله های 2 الی 4:
										<div style={{ textAlign: "center" }}>
											<img src={Vision} height={120} />
										</div>
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h3>منطقۀ مرگ</h3>
										پس از گذشت مدتی از شروع بازی، نقشه بازی
										شروع به کوچک شدن می‌کند. به این صورت که
										به مرور حاشیۀ نقشه تبدیل به منطقۀ مرگ
										(deadzone) می‌شود. این فرایند، محیط قابل
										حرکت برای فضانوردان را کوچک و کوچک‌تر
										خواهد کرد. ماندن در این منطقه در هر نوبت
										به فضانورد آسیب می‌زند. به این توجه کنید
										که هر نوبت مختص به یک فضانورد است پس اگر
										در نوبت خود از منطقۀ مرگ خارج نشوید،
										فضانورد شما دو مرتبه آسیب می‌بیند.
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h3>محدودیت فرصت انتخاب عمل</h3>
										اعلام عمل انتخاب شده به موتور بازی
										محدودیت زمانی دارد. در صورت عدم رعایت
										این محدودیت زمانی، فضانورد تیم خاطی از
										بازی حذف شده و فضانورد دیگر برندۀ بازی
										اعلام خواهد شد. محدودیت زمانی 400 میلی
										ثانیه است. ممکن است در آینده این زمان
										بیشتر شود.
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h3>خاتمه بازی و مشخص شدن برنده</h3>
										بازی با مرگ یکی از فضانوردان خاتمه
										می‌یابد و برنده فضانورد زنده اعلام
										می‌شود. در صورتی که هر دو فضانورد باهم
										بمیرند یا در تعداد مشخصی دور هیچکدام از
										فضانوردان نمیرند، یکی از فضانوردان با
										استفاده از معیارهای زیر که به ترتیب
										اولویت مرتب شده‌اند به عنوان برنده
										انتخاب می‌شود.
										<ol>
											<li>
												بازیکنی که سطح سلامتی بیشتری
												دارد
											</li>
											<li>
												بازیکنی که معجون زندگی کمتری
												مصرف کرده است
											</li>
											<li>
												بازیکنی که بمب بیشتری کاشته است{" "}
											</li>
											<li>
												بازیکنی که تله بیشتری گذاشته است
											</li>
											<li>یک بازیکن رندوم</li>
										</ol>
										درصورتیکه یکی از ایجنت‌ها دیرتر از زمان
										مشخص شده حرکت بعدیِ خود را به موتور بازی
										اعلام کند، در لحظه بازندۀ بازی اعلام
										خواهد شد و بازی خاتمه می‌یابد.
									</DocumentText>
								</Col>
							</Row>
						</DocumentsContainer>
					</Col>
				</Row>
			</Container>
			<Container fluid>
				<Row>
					<Col md={12}>
						<DocumentsContainer>
							<h2> مستندات فنی</h2>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>اجرای بازی</h4>
										<p>
											پس از دانلود فایل‌های بازی برای شروع
											یک بازی باید فایل main.py را اجرا
											کنید. این اسکریپت دو آرگومان به
											نام‌های p1 و p2 برای مشخص کردن فایل
											ایجنت‌ها دریافت می‌کند. فایل‌های
											ورودی می‌توانند از نوع py یا jar یا
											یک فایل اجرایی باشند. تشخیص نوع فایل
											به کمک پسوند آن انجام می‌شود.
										</p>
										<p>یک نمونه دستور اجرای بازی:</p>
										{/*<div style={{textAlign: "left"}}>*/}
										{/*	<img src={InitCode} height={120}/>*/}
										{/*</div>*/}

										<Code>
											py main.py -p1 player1.py -p2
											player2.jar
										</Code>
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>ارتباط با موتور بازی</h4>
										انتقال اطلاعات بین ایجنت ها و موتور بازی
										با استفاده از ورودی و خروجی استاندارد
										(Standard I/O) انجام می‌شود.
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>مختصات</h4>
										سیستم مختصاتی بازی به صورت ماتریسی است.
										یعنی مؤلفۀ اول (x) سطر و مؤلفۀ دوم (y)
										ستون را مشخص می‌کند. مثلاً بعد از حرکت
										به کاشیِ پایین، مؤلفۀ اول یک واحد افزایش
										می یابد.
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>شروع بازی</h4>
										موتور بازی به هر دو ایجنت یک پیام init
										ارسال می کند که فرمت آن به صورت نشان
										داده شده است: (کل پیام در یک خط است و
										اطلاعات با استفاده از یک فاصله از هم جدا
										شده اند)
										{/*<div style={{textAlign: "left"}}>*/}
										{/*	<img*/}
										{/*		src={initFormat}*/}
										{/*		height={120}*/}
										{/*	/>*/}
										{/*</div>*/}
										<Code>
											init{" "}
											{`{map.height} {map.width} {player.x} {player.y} {player.health} {player.bombRange} {player.trapCount} {vision} {bombDelay} {maxBombRange} {deadzoneStartingStep} {deadzoneExpansionDelay} {maxStep}`}
										</Code>
										<ul
											style={{
												textAlign: "left",
												direction: "ltr",
												marginTop: "10px",
											}}
										>
											<li>
												map.height: Number of map rows
											</li>
											<li>
												map.width: Number of map columns
											</li>
											<li>
												player.x: Index of the row which
												the player is in
											</li>
											<li>
												player.y: Index of the column
												which the player is in
											</li>
											<li>
												player.health: Initial health of
												the player
											</li>
											<li>
												player.bombRange: Initial
												range/power of the player’s
												bombs
											</li>
											<li>
												player.trapCount: Initial number
												of traps the player has
											</li>
											<li>
												vision: Manhattan distance of
												the farthest tile the player can
												see
											</li>
											<figure
												style={{
													margin: "5px",
													textAlign: "center",
												}}
											>
												<img
													src={Vision}
													height={120}
												/>
											</figure>
											<li>
												bombDelay: Number of steps it
												takes for a bomb to explode
											</li>
											<li>
												maxBombRange: Maximum upgradable
												bomb range
											</li>
											<li>
												deadzoneStartingStep: Step
												number in which deadzone starts
												to appear on the map
											</li>
											<li>
												deadzoneExpansionDelay: Number
												of steps before deadzone expands
												towards the center of the map
											</li>
											<li>
												maxStep: Maximum number of steps
												that the game continues
											</li>
										</ul>
										<p>
											سپس ایجنت باید پیام{" "}
											<Code inline={true}>
												init confirm
											</Code>{" "}
											را به کرنل بدهد.
										</p>
										<p>
											یک نمونه از پیام شروع بازی (از انجین
											به ایجنت) می‌تواند به این صورت باشد:
										</p>
										<Code
											code={
												"init 11 15 1 1 3 2 1 5 5 5 150 5 400"
											}
										/>
										<p>و جواب ایجنت به کرنل:</p>
										<Code code={"init confirm"} />
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>حین بازی</h4>
										<p>
											در هرنوبت، موتور بازی به بازیکنی که
											نوبت اوست، یک پیام که حاوی استیت
											بازی است را به فرمت زیر ارسال
											می‌کند: (کل پیام در یک خط است و
											اطلاعات با استفاده از یک فاصله از هم
											جدا شده اند)
										</p>
										<ul>
											<li>
												<p>
													در صورتی که بازیکن حریف در
													دید فضانورد باشد اطلاعات به
													صورت زیر ارسال می‌شود:
												</p>
												<Code>
													{`{stepCount} {lastActionTakenByThePlayer} {player.x} {player.y} {player.health} {player.healthUpgradeCount} {player.bombRange} {player.trapCount} 1 {otherPlayer.x} {otherPlayer.y} {otherPlayer.health} {numberOfTilesInVision} {tileInfoTuples} EOM`}
												</Code>
											</li>
											<li>
												<p>
													در صورتی که بازیکن حریف در
													دید فضانورد نباشد اطلاعات به
													صورت زیر ارسال می‌شود:
												</p>
												<Code>
													{`{stepCount} {lastActionTakenByThePlayer} {player.x} {player.y} {player.health} {player.healthUpgradeCount} {player.bombRange} {player.trapCount} 0 {numberOfTilesInVision} {tileInfoTuples} EOM`}
												</Code>
												<ul
													style={{
														textAlign: "left",
														direction: "ltr",
														marginTop: "10px",
													}}
												>
													<li>
														stepCount:‌ Current step
														(0-based)
													</li>
													<li>
														<p>
															lastActionTakenByThePlayer:
															A feedback of the
															last submitted
															action.
														</p>
														<p>
															Game actions are as
															follows:
														</p>
														<ul
															style={{
																listStyleType:
																	"none",
															}}
														>
															<li>0: Go left</li>
															<li>1: Go right</li>
															<li>2: Go up</li>
															<li>3: Go down</li>
															<li>4: Stay</li>
															<li>
																5: Place bomb
															</li>
															<li>
																6: place trap
																left
															</li>
															<li>
																7: Place trap
																right
															</li>
															<li>
																8: Place trap up
															</li>
															<li>
																9: Place trap
																down
															</li>
															<li>10: Init</li>
															<li>
																11: No action
															</li>
														</ul>
														<p
															style={{
																textAlign:
																	"right",
																direction:
																	"rtl",
																marginTop:
																	"10px",
															}}
														>
															دقت کنید که اعداد
															بالا فقط پاسخ سرور
															به فضانورد هستند.
															اعمال مجاز برای
															انجام در بخش‌های
															بعدی ذکر شده‌اند.
														</p>
													</li>
													<li>
														player.x: Index of the
														row which the player is
														in
													</li>
													<li>
														player.y: Index of the
														column which the player
														is in
													</li>
													<li>
														player.health: Current
														health of the player
													</li>
													<li>
														player.healthUpgradeCount:
														Number of health
														upgrades picked up by
														the player
													</li>
													<li>
														player.bombRange:
														Current range/power of
														the player’s bombs{" "}
													</li>
													<li>
														player.trapCount:
														Current number of traps
														the player has
													</li>
													<li>
														otherPlayer.x: Index of
														the row which the other
														player is in
													</li>
													<li>
														otherPlayer.y: Index of
														the column which the
														other player is in
													</li>
													<li>
														otherPlayer.health:
														Current health of the
														other player
													</li>
													<li>
														numberOfTilesInVision:
														Number of info tuples
														coming up next
													</li>
													<li>
														<p>
															tileInfoTuples: a
															3-part info chunk in
															the format shown
															below
														</p>
														<Code>
															{`{tile.x}`}{" "}
															{`{tile.y}`}{" "}
															{`{tile.state}`}
														</Code>
														<ul>
															<li>
																tile.x: Index of
																the tile row
															</li>
															<li>
																tile.y: Index of
																the tile column
															</li>
															<li>
																tile.state: A
																number
																representing the
																entities in the
																tile. The i-th
																bit shows if the
																tile has the
																i-th entity or
																not.
															</li>
															<ul
																style={{
																	listStyleType:
																		"none",
																}}
															>
																<li>
																	0: Tile is
																	in dead zone
																</li>
																<li>
																	1: Fire
																	(explosion
																	side effect)
																</li>
																<li>2: Box</li>
																<li>3: Wall</li>
																<li>4: Bomb</li>
																<li>
																	5: Bomb
																	range
																	upgrade
																</li>
																<li>
																	6: Health
																	upgrade
																</li>
																<li>
																	7: Trap
																	upgrade
																</li>
																<li>
																	8: A player
																</li>
															</ul>
														</ul>
													</li>
												</ul>
												<p>
													سپس بازیکن اکشنی که می‌خواهد
													انجام دهد را به صورت زیر
													برای کرنل ارسال می‌کند:
												</p>
												<Code>{`{action}`}</Code>
												<ul
													style={{
														textAlign: "left",
														direction: "ltr",
														marginTop: "10px",
													}}
												>
													<li>
														<p>
															Action: The action
															taken by the agent.
														</p>
														<p>
															If an illegal action
															is taken by the
															player, ‘no_action’
															is automatically
															selected as the
															player's action.
															Legal actions are as
															follows:
														</p>
														<ul
															style={{
																listStyleType:
																	"none",
															}}
														>
															<li>0: Go left</li>
															<li>1: Go right</li>
															<li>2: Go up</li>
															<li>3: Go down</li>
															<li>4: Stay</li>
															<li>
																5: Place bomb
															</li>
															<li>
																6: Place trap
																left
															</li>
															<li>
																7: Place trap
																right
															</li>
															<li>
																8: Place trap up
															</li>
															<li>
																9: Place trap
																down
															</li>
														</ul>
													</li>
												</ul>
												<p>
													یک نمونه از پیام حین بازی
													(از انجین به ایجنت) می‌تواند
													به این صورت باشد:
												</p>
												<Code>
													0 7 5 6 3 0 2 1 1 5 8 3 25 2
													6 0 3 5 0 3 6 0 3 7 0 4 4 0
													4 5 0 4 6 0 4 7 0 4 8 0 5 3
													0 5 4 0 5 5 0 5 6 0 5 7 0 5
													8 0 5 9 0 6 4 0 6 5 0 6 6 0
													6 7 0 6 8 0 7 5 0 7 6 0 7 7
													0 8 6 0 EOM
												</Code>
												<p>و جواب ایجنت به انجین:</p>
												<Code>3</Code>
											</li>
										</ul>
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>خاتمۀ بازی</h4>
										<p>
											در انتهای مسابقه، اگر هیچ بازیکنی از
											قوانین تخطی نکرده باشد، پیام زیر
											برای هر بازیکن ارسال میشود:
										</p>
										<Code>
											term {"{lastStepCount}"}{" "}
											{"{result}"}
										</Code>
										<ul
											style={{
												textAlign: "left",
												direction: "ltr",
												marginTop: "10px",
											}}
										>
											<li>
												lastStepCount: Last step (in
												which the game ended).
											</li>
											<li>
												result: Winner of the game.
												(1-based)
											</li>
										</ul>
										<p>
											یک نمونه از پیام پایان بازی (از
											انجین به ایجنت) می‌تواند به این صورت
											باشد (بازیکن اول در نوبت 18 برنده
											شده است):
										</p>
										<Code>term 18 1</Code>
										<p>
											اینجا ایجنت پیامی به انجین نمیدهد.
										</p>
										<p>
											یک نمونه ایجنت رندوم می‌تواند به
											صورت زیر باشد:
										</p>
										<Code>
											{`import random
init_msg = input()
# Do stuff
print('init confirm')
while True:
    state_msg = input()
    if 'term' in state_msg:
        break
    # Do stuff
    print(int(random.random() * 10))`}
										</Code>
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>نکات و تذکرات سیستم تبادل پیام</h4>
										<ul>
											<li>
												<p>
													هر پیام بین موتور بازی و
													ایجنت‌ها فقط شامل یک خط با
													پایانِ newline خواهد بود.
													فراموش نکنید که برای ثبت
													پاسخ حتماً در انتهای پیام
													خود یک newline چاپ کنید و
													اگر دستور مورد استفادۀ شما
													autoflush نمی‌کند، stdout را
													یکبار flush کنید. مثلاً در
													زبان سی‌پلاس‌پلاس می‌توان از
													دستور
													<Code>
														fflush(stdout); // if
														you use scanf/printf
													</Code>
													برای فلاش کردن استفاده کرد.
												</p>
											</li>
											<li>
												<p>
													در هر پیام اطلاعات با
													استفاده از یک فاصله
													(whitespace) از هم جدا
													شده‌اند.
												</p>
											</li>
											<li>
												<p>
													زمان چاپ شدن پاسخ خود برای
													موتور بازی را نیز در محاسبات
													خود لحاظ کنید.
												</p>
											</li>
										</ul>
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>نمایش گرافیکی بازی</h4>
										<p>
											پس از خاتمه بازی شما می‌توانید لاگ
											تولید شده بازی که در پوشه gameLog
											ذخیره شده را به ویژوالایزر بازی
											بدهید و بازی انجام شده را مشاهده
											کنید.
										</p>
										<p>
											کلیدهای میانبر ویزوالایزر به شرح زیر
											است:
										</p>
										<Code>
											{`Q : Toggle music\nE : Toggle sound\nR : Restart\nF : Show full player names\nW / UP : Increase game speed\nS / DOWN : Decrease game speed\nENTER / SPACE : Play/Pause\nA / LEFT : Step back (x5 while holding ctrl)\nD / RIGHT : Step forward (x5 while holding ctrl)\n0 - 9 : Jump to the n-th decile (e.g. press 5 to jump to the middle of the game)\nF2 : Take a screenshot\nESC : Back to menu`}
										</Code>
									</DocumentText>
								</Col>
							</Row>
							<Row>
								<Col xs={1}>
									<Dot />
								</Col>
								<Col>
									<DocumentText>
										<h4>لاگ برای ایجنت ها</h4>
										<p>
											درصورتی که می‌خواهید برای دیباگ،
											ایجنت‌های شما لاگ تولید کنند،
											می‌توانید آن را در stderr چاپ کنید.
											دقت کنید که چون موتور بازی از stdout
											برای تبادل پیام استفاده میکند، لذا
											نمی‌توانید از آن برای این کار
											استفاده کنید. این قابلیت وجود دارد
											که لاگ ایجنت ها در کنسول نمایش داده
											شود یا در یک فایل مشخص ذخیره شود
											(روش فایل بهتر است). این تنظیمات در
											فایل تنظیمات قابل تغییر است.
										</p>
										<p>یک نمونه لاگ به زبان پایتون:</p>
										<Code>
											{`import sys
print(f'Currently in step {step}.', file=sys.stderr)`}
                    </Code>
                    <p>
                      نکتۀ مهم: کار با IO زمان زیادی از ایجنت شما می‌گیرد، لذا توصیه می‌شود در کدی که برای مسابقۀ اصلی
                      ارسال می‌کنید قسمت‌های مربوط به لاگ را حذف کنید.
                    </p>
                  </DocumentText>
                </Col>
              </Row>
              <Row>
                <Col xs={1}>
                  <Dot />
                </Col>
                <Col>
                  <DocumentText>
                    <h4>تنظیمات بازی</h4>
                    <p>
                      تنظیمات کلی موتور بازی را می‌توانید در فایل settings.py تغییر دهید. این تنظیمات شامل محل ذخیره
                      سازی لاگ بازی، محل ذخیره سازی لاگ ایجنت‌ها، آدرس نقشۀ بازی، تغییر محدودیت زمانی و دیگر تنظیمات کلی
                      است.{" "}
                    </p>
                  </DocumentText>
                </Col>
              </Row>
              <Row>
                <Col xs={1}>
                  <Dot />
                </Col>
                <Col>
                  <DocumentText>
                    <h4>تنظیمات نقشۀ بازی</h4>
                    <p>
                      تنظیمات نقشۀ بازی در فایل نقشه قابل تغییر است. این تنظیمات شامل ابعاد نقشه، محل شروع فضانوردان،
                      محدودیت دید فضانوردان، سطح سلامتی اولیّۀ فضانوردان، شعاع انفجار اولیّۀ بمب‌ها، زمان شروع گسترش
                      منطقۀ مرگ، تاخیر گسترش منطقۀ مرگ، حداکثر تعداد دور بازی و نقشۀ بازی است.
                    </p>
                  </DocumentText>
                </Col>
              </Row>
              <Row>
                <Col xs={1}>
                  <Dot />
                </Col>
                <Col>
                  <DocumentText>
                    <h4>دامنۀ متغیرهای بازی</h4>
                    <ul
                      style={{
                        textAlign: "left",
                        direction: "ltr",
                        marginTop: "10px",
                      }}
                    >
                      <li>Map width/height: [5, 25]</li>
                      <li>Initial player health: [3, 6]</li>
                      <li>Initial bomb range: [1, 3]</li>
                      <li>Initial trap count: [1, 3]</li>
                      <li>Vision: [5, 7]</li>
                      <li>Bomb delay: [8, 16]</li>
                      <li>Maximum bomb range: [4, 6]</li>
                      <li>Maximum number of steps: [200, 400]</li>
                      <li>Deadzone starting step: TBA</li>
                      <li>Deadzone expansion delay: TBA</li>
                    </ul>
                  </DocumentText>
                </Col>
             
			  </Row>
			  <Row>
                <Col xs={1}>
                  <Dot />
                </Col>
                <Col>
                  <DocumentText>
                    <h4>ورژن کتابخانه و پیش نیاز‌های فنی سرور بازی ها</h4>
                    <ul
                      style={{
                        textAlign: "left",
                        direction: "ltr",
                        marginTop: "10px",
                      }}
                    >
                      <li>gcc & g++ (GCC) 11.2.0</li>
                      <li>openjdk 11.0.6 2020-01-14</li>
                      <li>python 3.8.10 </li>
                      <li>tensorflow 2.6.0</li>
                      <li>torch 1.9.0cpu</li>
                      <li> torchvision 0.10.0+cpu</li>
                      <li>numpy 1.19.5</li>
                      <li>pandas 1.3.3</li>
                      <li>regex 2021.8.28</li>
                      <li>scikit-learn 0.24.2</li>
                    </ul>
                  </DocumentText>
                </Col>
             
			  </Row>
            
			
			</DocumentsContainer>
          </Col>
        </Row>
      </Container>
    
	





	</>
  );
}

export default Documents;


