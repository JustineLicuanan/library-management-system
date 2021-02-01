import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import {
	Col,
	Row,
	Form,
	Card,
	Button,
	FormCheck,
	Container,
	InputGroup,
} from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';

import { Routes } from '../../routes';
import BgImage from '../../assets/img/illustrations/signin.svg';
import { myMeta } from '../../meta';
import { useMutationLogin } from '../../hooks/useMutationLogin';

export default () => {
	const history = useHistory();
	const { mutate, data } = useMutationLogin();

	React.useEffect(() => {
		document.title = `Login | ${myMeta.title}`;
	}, []);

	React.useEffect(() => {
		if (data) {
			history.push(Routes.DashboardOverview.path);
		}

		// eslint-disable-next-line
	}, [data]);

	return (
		<main>
			<section className='d-flex align-items-center my-5 mt-lg-6 mb-lg-5'>
				<Container>
					<Row
						className='justify-content-center form-bg-image'
						style={{ backgroundImage: `url(${BgImage})` }}
					>
						<Col
							xs={12}
							className='d-flex align-items-center justify-content-center'
						>
							<div className='bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500'>
								<div className='text-center text-md-center mb-4 mt-md-0'>
									<h3 className='mb-0'>Login to {myMeta.title}</h3>
								</div>
								<Formik
									initialValues={{ email: '', password: '' }}
									validate={(values) => {
										const errors = {};

										if (!values.email) {
											errors.email = 'Required';
										} else if (
											!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
												values.email
											)
										) {
											errors.email = 'Invalid email address';
										}

										if (!values.password) {
											errors.password = 'Required';
										}

										return errors;
									}}
									onSubmit={(values, { setSubmitting }) => {
										mutate(values);
										setSubmitting(false);
									}}
								>
									{({
										values,
										errors,
										touched,
										handleChange,
										handleBlur,
										handleSubmit,
										isSubmitting,
										/* and other goodies */
									}) => (
										<Form className='mt-4' onSubmit={handleSubmit}>
											<Form.Group id='email' className='mb-4'>
												<Form.Label>Your Email</Form.Label>
												<InputGroup>
													<InputGroup.Text>
														<FontAwesomeIcon icon={faEnvelope} />
													</InputGroup.Text>
													<Form.Control
														required
														type='email'
														name='email'
														onChange={handleChange}
														onBlur={handleBlur}
														value={values.email}
														placeholder='example@company.com'
													/>
												</InputGroup>
												{errors.email && touched.email && errors.email}
											</Form.Group>
											<Form.Group>
												<Form.Group id='password' className='mb-4'>
													<Form.Label>Your Password</Form.Label>
													<InputGroup>
														<InputGroup.Text>
															<FontAwesomeIcon icon={faUnlockAlt} />
														</InputGroup.Text>
														<Form.Control
															required
															type='password'
															name='password'
															onChange={handleChange}
															onBlur={handleBlur}
															value={values.password}
															placeholder='Password'
														/>
													</InputGroup>
													{errors.password &&
														touched.password &&
														errors.password}
												</Form.Group>
												<div className='d-flex justify-content-between align-items-center mb-4'>
													<Form.Check type='checkbox'>
														<FormCheck.Input
															id='defaultCheck5'
															className='me-2'
														/>
														<FormCheck.Label
															htmlFor='defaultCheck5'
															className='mb-0'
														>
															Remember me
														</FormCheck.Label>
													</Form.Check>
													<Card.Link className='small text-end'>
														Lost password?
													</Card.Link>
												</div>
											</Form.Group>
											<Button
												variant='primary'
												type='submit'
												className='w-100'
												disabled={isSubmitting}
											>
												Sign in
											</Button>
										</Form>
									)}
								</Formik>

								<div className='d-flex justify-content-center align-items-center mt-4'>
									<span className='fw-normal'>
										Not registered?
										<Card.Link
											as={Link}
											to={Routes.Signup.path}
											className='fw-bold'
										>
											{` Create account `}
										</Card.Link>
									</span>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</main>
	);
};
