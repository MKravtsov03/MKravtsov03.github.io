/* eslint-disable */

const ProductStyles = () =>
    function (values) {
        return `
        * {
            box-sizing: border-box;
        }
        .products-grid {
            gap: 20px;
            flex-wrap: wrap;
        }
        .products-grid.two-columns {
            display: flex;
            gap: 15px;
        }
        .products-grid.two-columns .product-card {
            width: calc(50% - 8px);
        }
        
        .products-grid.two-columns--reverse {
            display: flex;
            gap: 15px;
        }
        .products-grid.two-columns--reverse  .product-card {
             width: calc(50% - 8px);
        }
        .products-grid.two-columns--reverse  .product-card:nth-child(odd) .product-card__inner {
             order: -1;
             padding-top: 15px;
        }
        
        .products-grid.three-columns {
            display: flex;
            gap: 10px;
        }
        .products-grid.three-columns  .product-card {
             width: calc(33.33333% - 7px);
        }
        
        .product-card {
          position: relative;
          gap: 15px;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0,0,0,.125);
          border-radius: .25rem;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
        .product-card__inner {
            padding: 0 10px;
        }

        .product-card-body {
          padding: 0 1rem 1rem;
          text-align: left;
        }

        .product-card-body h3 {
          margin: 0.7rem 0;
        }

        .product-card img {
          max-width: 100%;
          object-fit: contain;
          border-top-left-radius: 0.25rem;
          border-top-right-radius: 0.25rem;
        }
        
        .product-title {
            text-align: center;
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 15px;
        }
         .products-grid.two-columns .product-title,
         .products-grid.two-columns--reverse .product-title {
            font-size: 19px;
         }
         .products-grid.three-columns .product-title {
            font-size: 14px;
         }
        
        .product-price {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            font-size: 18px;
            font-weight: 500;
            margin-bottom: 15px;
        }
        .price-old {
            color: #98A2B3;
            text-decoration: line-through;
        }
        .price {
            margin-bottom: 15px;
        }
         
       
        .products-grid.three-columns .product-description {
            font-size: 12px;
         }
        
        .product-card .product-footer {
          display: flex;
          justify-content: center;
          padding: 15px;
          align-items: center;
          font-weight: bold;
        }

        .product-card .product-footer > div, .product-card .product-footer > .button{
          width: 200px;
          max-width: 100%;
        }

        .product-card .product-footer > div {
          border-bottom-left-radius: 0.25rem;
        }

        .button {
          font-weight: 400;
          color: #ffffff;
          text-align: center;
          vertical-align: middle;
          background-color: #000;
          border: 1px solid #0c54c9;
          border-radius: 8px;
          padding: .75rem;
          font-size: 1rem;
          line-height: 1.5;
          transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
          cursor: pointer;
        }

        .m-0 {
          margin: 0px;
        }

        .no-underline {
          text-decoration: none !important;
        }

        .no-border-radius {
          border-radius: 0px;
        }
        
        .product-details-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .details-item {
          width: 50%;
        }
        
        .details-item label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          font-size: 14px;
          color: #344054;
        }
        
        .product-type {
            text-align: left;
            color: #344054;
            font-size: 16px;
            padding: 5px 15px;
        }
        .product-description {
            line-height: 175%;
        }
        
        
        .selectMultiple {
             width:100%;
             position: relative;
        }
         .selectMultiple select {
            display: none;
        }
        .selectMultiple .active {
           cursor: pointer;
           display: flex;
           align-items: center;
           flex-wrap: wrap;
        }
      
         .selectMultiple > div {
             position: relative;
             z-index: 2;
             padding: 8px 12px 2px 12px;
             background: #fff;
             font-size: 14px;
             font-weight: 500;
             min-height: 40px;
             color: #344054;
             box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
             border-radius: 6px;
             border: 1px solid #D0D5DD;
             transition: box-shadow 0.3s ease;
        }
         .selectMultiple > div:hover {
            box-shadow: 0 4px 24px -1px rgba(22, 42, 90, .16);
        }
         .selectMultiple > div .arrow {
             right: 1px;
             top: 0;
             bottom: 0;
             cursor: pointer;
             width: 28px;
             position: absolute;
        }
         .selectMultiple > div .arrow:before, .selectMultiple > div .arrow:after {
             content: '';
             position: absolute;
             display: block;
             width: 2px;
             height: 8px;
             border-bottom: 8px solid #344054;
             top: 43%;
             transition: all 0.3s ease;
        }
         .selectMultiple > div .arrow:before {
             right: 12px;
             transform: rotate(-130deg);
        }
         .selectMultiple > div .arrow:after {
             left: 9px;
             transform: rotate(130deg);
        }
         .selectMultiple > div span {
             color: #99a3ba;
             display: block;
             position: absolute;
             left: 12px;
             cursor: pointer;
             top: 9px;
             transition: all 0.1s ease;
             pointer-events: none;
        }
         .selectMultiple > div span.hide {
             opacity: 0;
             visibility: hidden;
             transform: translate(-4px, 0);
        }
         .selectMultiple > div a {
             position: relative;
             padding: 0 24px 6px 8px;
             line-height: 28px;
             color: #1e2330;
             display: inline-block;
             vertical-align: top;
             margin: 0 6px 0 0;
        }
         .selectMultiple > div a em {
             font-style: normal;
             display: block;
             white-space: nowrap;
        }
         .selectMultiple > div a:before {
             content: '';
             left: 0;
             top: 0;
             bottom: 6px;
             width: 100%;
             position: absolute;
             display: block;
             background: rgba(228, 236, 250, .7);
             z-index: -1;
             border-radius: 4px;
        }
         .selectMultiple > div a i {
             cursor: pointer;
             position: absolute;
             top: 0;
             right: 0;
             width: 24px;
             height: 28px;
             display: block;
        }

         .selectMultiple > div a i:before, .selectMultiple > div a i:after {
             content: '';
             display: block;
             width: 2px;
             height: 10px;
             position: absolute;
             left: 50%;
             top: 50%;
             background: #0b68ff;
             border-radius: 1px;
        }
         .selectMultiple > div a i:before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
         .selectMultiple > div a i:after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
         .selectMultiple > ul {
             margin: 0;
             padding: 0;
             list-style: none;
             font-size: 16px;
             z-index: 1;
             position: absolute;
             top: 100%;
             left: 0;
             right: 0;
             visibility: hidden;
             opacity: 0;
             border-radius: 8px;
             transform: translate(0, 20px) scale(0.8);
             transform-origin: 0 0;
             box-shadow: 0 12px 20px rgba(22, 42, 90, .08);
             transition: all 0.4s ease, transform 0.4s cubic-bezier(0.87, -0.41, 0.19, 1.44), filter 0.3s ease 0.2s;
             z-index: 3;
             max-height: 200px;
             overflow-y: scroll;
        }
        
        .selectMultiple > ul .list-item {
          color: #1e2330;
          background: #fff;
          padding: 12px 16px;
          cursor: pointer;
          overflow: hidden;
          position: relative;
          transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease 0.3s, opacity 0.5s ease 0.3s, border-radius 0.3s ease;
          &.hide {
            display: none;
          }
        }
        
        .selectMultiple > ul .search-item {
          padding: 0 16px;
          background: #fff;
          position: relative;
          border-bottom: 1px solid #D0D5DD;
        }
        
        .selectMultiple > ul .search-item input {
          border: none;
          height: 37px;
          padding: 0 10px 0 25px;
          font-size: 14px;
          width: 100%;
          outline: none;
        }
        .selectMultiple > ul .search-item svg {
          position: absolute;
          left: 15px;
          top: 9px;
        }
        
        .selectMultiple > ul li.hide {
            display: none;
        }
         .selectMultiple > ul li:first-child {
            border-radius: 8px 8px 0 0;
        }
         .selectMultiple > ul li:first-child:last-child {
            border-radius: 8px;
        }
         .selectMultiple > ul li:last-child {
            border-radius: 0 0 8px 8px;
        }
         .selectMultiple > ul li:last-child:first-child {
            border-radius: 8px;
        }
         .selectMultiple > ul .list-item:hover {
             background: #0b68ff;
             color: #fff;
        }
         .selectMultiple > ul li:after {
             content: '';
             position: absolute;
             top: 50%;
             left: 50%;
             width: 6px;
             height: 6px;
             background: rgba(0, 0, 0, .4);
             opacity: 0;
             border-radius: 100%;
             transform: scale(1, 1) translate(-50%, -50%);
             transform-origin: 50% 50%;
        }
         .selectMultiple.open > div {
            box-shadow: 0 4px 20px -1px rgba(22, 42, 90, .12);
        }
         .selectMultiple.open > div .arrow:before {
            transform: rotate(-50deg);
        }
         .selectMultiple.open > div .arrow:after {
            transform: rotate(50deg);
        }
         .selectMultiple.open > ul {
             transform: translate(0, 12px) scale(1);
             opacity: 1;
             visibility: visible;
             filter: drop-shadow(0 16px 24px rgba(22, 42, 90, .16));
        }
        .layout-list {
            display: flex;
            align-items: center;
            gap: 16px
        }
        .layout-list label {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            padding: 5px;
            border: 1px solid #D0D5DD;
            border-radius: 6px;
            cursor: pointer;
            overflow: hidden;
        }
        .layout-list img {
            max-width: 100%;
            position: relative;
            z-index: 2;
        }
        .layout-list label span {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.3s ease-in-out;
        }
        .layout-list label.disabled {
           pointer-events: none;
           opacity: 0.6;
        }
        .layout-list input {
            width: 0;
            height: 0;
            opacity: 0;
        }
        .layout-list input:checked + span {
            background: #F4FAFF;
        }
        .font-styles__row {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .font-styles__item {
            width: 30px;
            height: 30px;
            position: relative;
            display: flex !important;
            align-items: center;
            justify-content: center;
            padding: 5px;
            border: 1px solid #D0D5DD;
            border-radius: 6px;
            cursor: pointer;
            overflow: hidden;
        }
        .font-styles__item input {
            width: 0;
            height: 0;
            opacity: 0;
        }
        .font-styles__item img {
            max-width: 70%;
            positin: relative;
            z-index: 2;
        }
        .font-styles__item span {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.3s ease-in-out;
        }
        .font-styles__item input:checked + span {
            background: #dcefff;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        .hidden {
            display: none !important;
        }
        .recovery-cart {
            display:  flex;
            align-items: center;
            justify-content: center;
            margin: 30px auto 0;
            max-width: 300px;
        }
`;
    };

const CouponStyles = () =>
    function (values) {
        return `
            .coupon-wrapper {
                text-align: center;
                padding: 15px;
            }
            
            .coupon-title {
                font-size: 24px;
                font-weight: 600;
            }
            
            .coupon-description {
                line-height: 16px;
                font-size: 14px;
                margin-bottom: 20px;
            }
            
            .coupon-value {
                font-family: 'Rubik', sans-serif;
                font-size: 22px;
                font-weight: 600;
                color: #0B68FF;
                margin-bottom: 20px;
            }
            
            .button {
              font-weight: 400;
              color: #ffffff;
              text-align: center;
              vertical-align: middle;
              background-color: #000;
              border: 1px solid #0c54c9;
              border-radius: 8px;
              padding: .75rem;
              font-size: 1rem;
              line-height: 1.5;
              transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
              cursor: pointer;
            }
            
            .no-underline {
              text-decoration: none !important;
            }
            .font-styles__row {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        .font-styles__item {
            width: 30px;
            height: 30px;
            position: relative;
            display: flex !important;
            align-items: center;
            justify-content: center;
            padding: 5px;
            border: 1px solid #D0D5DD;
            border-radius: 6px;
            cursor: pointer;
            overflow: hidden;
        }
        .font-styles__item input {
            width: 0;
            height: 0;
            opacity: 0;
        }
        .font-styles__item img {
            max-width: 70%;
            positin: relative;
            z-index: 2;
        }
        .font-styles__item span {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            transition: all 0.3s ease-in-out;
        }
        .font-styles__item input:checked + span {
            background: #dcefff;
        }
        .product-details-inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
        
        .details-item {
          width: 50%;
        }
        
        .details-item label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          font-size: 14px;
          color: #344054;
        }
        .coupon-item {
            max-width: 320px;
            margin: 0 auto 20px;
            display: flex;
            justify-content: space-between;
            align-item: center;
            font-size: 16px;
            flex-wrap: wrap;
        }
        .coupon-item.link {
            justify-content: center;
        }
        .coupon-item__value {
            font-weight: 700;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        `
    }

const productSelect = (value, data) => {
    return `
<div class="blockbuilder-widget-label">
    <p class="blockbuilder-label-primary">Product Data</p>
</div>
<select multiple data-placeholder="Select products">
    ${data?.options.map(option => 
        `
            <option ${value.products.includes(option.value.toString()) ? 'selected': ''} class="prodOption" value="${option.value}">
                ${option.label}
            </option>
        `
    )}
</select>
`
}

const renderDetails = (detailsLabelsMap, options, values) => `
<div class="product-details">
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">Details</p>
    </div>
    <div class="product-details-inner">
        ${
            options.map(option => (`
            <div class="details-item">
            <label>
                <input ${values.details[option] ? 'checked' : ''} name="${option}" type="checkbox">
                <span>${detailsLabelsMap[option]}</span>
            </label>
            </div>`)).join('')
        }
    </div>
</div>
`

const renderTitleFontStyle = (options, value) => `
<div class="title-font-style">
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">${value.label}</p>
    </div>
    <div class="font-styles">
        <div class="font-styles__box">
            <div class="font-styles__row">
                ${
                        options.map(option =>`
                        <label class="font-styles__item">
                            <img src="https://mkravtsov03.github.io/${option}.svg" alt="">
                            <input type="checkbox" value="${option}" ${value.styles[option].active ? 'checked' : ''} name="${option}">
                            <span></span>
                        </label>
                    `).join('')
                }
            </div>
        </div>
    </div>
</div>
`

const renderDescrFontStyle = (options, values) => `
<div class="descr-font-style">
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">Font style</p>
    </div>
    <div class="font-styles">
        <div class="font-styles__box">
            <div class="font-styles__row">
                ${
                        options.map(option =>`
                        <label class="font-styles__item">
                            <img src="https://mkravtsov03.github.io/${option}.svg" alt="">
                            <input type="checkbox" value="${option}" ${values[option].active ? 'checked' : ''} name="${option}">
                            <span></span>
                        </label>
                    `).join('')
                }
            </div>
        </div>
    </div>
</div>
`

const layoutsList = (layouts) => {
    return `
    <div class="blockbuilder-widget-label">
        <p class="blockbuilder-label-primary">Layout</p>
    </div>
    <div class="layout-list">
        ${
        layouts.map(layout => `
                 <label class="${layout.disabled ? 'disabled' : '' } ${layout.value}">
                    <img src="https://mkravtsov03.github.io/${layout.value}.svg" alt="">
                    <input type="radio" value="${layout.value}" ${layout.active ? 'checked' : ''} name="layout">
                    <span></span>
                </label>
            `).join('')
    }
    </div>
`
}


const getCouponTemplate = () => function (values) {
    const { data: { coupons }, coupon } = values;
    console.log({couponsValues: values})
    const activeCoupon = coupons.find(currentCoupon => currentCoupon.id == coupon)
    const renderCoupon = () => `
    <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}" class="coupon-value"> 
                ${(activeCoupon?.title || 'XXXXXXXXXXXX')}
    </div>
    `;
    const renderValidFrom = () => `
    <div style="" class="coupon-item">
        <div class="coupon-item__title"> 
            Valid from:
        </div>
        <div style="font-family: ${values.validFromFont.value}; font-size: ${values.validFromFontSize}px; color: ${values.validFromColor};" class="coupon-item__value"> 
            ${(activeCoupon?.starts_at ? new Date(activeCoupon?.starts_at).toDateString() : '')}
        </div>
    </div>
    `;
    const renderExpireDate = () => `
    <div style="font-family: ${values.expireDateFont.value}; font-size: ${values.expireDateFontSize}px; color: ${values.expireDateColor};" class="coupon-item">
        <div class="coupon-item__title"> 
            Expiry Date:
        </div>
        <div style="" class="coupon-item__value"> 
            ${(activeCoupon?.ends_at ? new Date(activeCoupon?.ends_at).toDateString() : '')}
        </div>
    </div>
    `;
    const renderCouponValue = () => `
    <div style="font-family: ${values.discountValueFont.value}; font-size: ${values.discountValueFontSize}px; color: ${values.discountValueColor};" class="coupon-item">
        <div class="coupon-item__title"> 
            Discount value:
        </div>
        <div style="" class="coupon-item__value"> 
            ${(activeCoupon?.value ? activeCoupon?.value : '')}
        </div>
    </div>
    `;
    const renderCouponType = () => `
    <div style="" class="coupon-item">
        <div class="coupon-item__title"> 
            Discount type:
        </div>
        <div style="" class="coupon-item__value"> 
            ${(activeCoupon?.value_type ? activeCoupon?.value_type : '')}
        </div>
    </div>
    `;
    const renderLink = () => `
    <div style="" class="coupon-item link">
        <a style="border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; color: ${values.btnColor}; font-size: ${values.btnFontSize}px; background-color: ${values.btnBg};" class="button no-underline" href="${(values.btnLink.url ? values.btnLink.url  : activeCoupon?.shareable_link)}" target="_blank">${values.couponBtn}</a>
    </div>
    `;
    return (
    `
        <div class="coupon-wrapper">
            ${values.details.details.coupon ? renderCoupon() : ''}
            ${values.details.details.startsAt ? renderValidFrom() : ''}
            ${values.details.details.expireDate ? renderExpireDate() : ''}
            ${values.details.details.couponValue ? renderCouponValue() : ''}
            ${values.details.details.couponType ? renderCouponType() : ''}
            ${values.details.details.link ? renderLink() : ''}
        </div>
    `
    )
};

const getEventsTemplate = () => function (values) {
    console.log(values)
    const acctiveLayout = values.layout.find(layout => layout.active)
    const productCardRenderer = () => `
            <div class="product-card">
                <img alt="" class="${values?.details?.details.image ? '' : 'hidden'}" src="https://via.placeholder.com/480x320.jpg?text=Image+placeholder" />
                <div class="product-card__inner">
                    <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all;" class="product-title ${values?.details?.details.name ? '' : 'hidden'}">
                        {{ checkout.abandoned_checkout.item_names }}
                    </div>
                    <div style="font-family: ${values.priceFont.value}; font-size: ${values.priceFontSize}px; text-align: ${values.priceAligment}; color: ${values.priceColor}; font-weight: ${values.priceFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.priceFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.priceFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all;" class="price ${values?.details?.details.price ? '' : 'hidden'}">{{ checkout.abandoned_checkout.item_prices }}</div>
                    <div style="font-family: ${values.quantityFont.value}; font-size: ${values.quantityFontSize}px; text-align: ${values.quantityAligment}; color: ${values.quantityColor}; font-weight: ${values.quantityFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.quantityFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.quantityFontStyle.styles.underline.active ? 'underline' : 'none'}; word-break: break-all;" class="quantity price ${values?.details?.details.quantity ? '' : 'hidden'}"> Quantity: {{ checkout.abandoned_checkout.item_quantities }}</div>
                </div>
                <div class="product-footer">
                <a style="border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; color: ${values.btnColor}; font-size: ${values.btnFontSize}px; background-color: ${values.btnBg};" class="button no-underline ${values?.details?.details.button ? '' : 'hidden'}" href="{{ checkout.abandoned_checkout.item_links }}" target="_blank">${values.btn}</a>
                </div> 
            </div>
        `;
    return `
        <div class="products-grid ${acctiveLayout.value}">
            ${productCardRenderer()}
            ${acctiveLayout.value == 'two-columns' ? productCardRenderer() : '' }
        </div>
        <a style="border-left: ${values.recoveryBorder.borderLeftWidth} ${values.recoveryBorder.borderLeftStyle} ${values.recoveryBorder.borderLeftColor}; border-top: ${values.recoveryBorder.borderTopWidth} ${values.recoveryBorder.borderTopStyle} ${values.recoveryBorder.borderTopColor}; border-right: ${values.recoveryBorder.borderRightWidth} ${values.recoveryBorder.borderRightStyle} ${values.recoveryBorder.borderRightColor}; border-bottom: ${values.recoveryBorder.borderBottomWidth} ${values.recoveryBorder.borderBottomStyle} ${values.recoveryBorder.borderBottomColor}; color: ${values.recoveryColor}; font-size: ${values.recoveryFontSize}px; background-color: ${values.recoveryBg};" class="button recovery-cart no-underline ${values?.details?.details.recovery ? '' : 'hidden'}" href="{{ checkout.abandoned_checkout_url }}" target="_blank">${values.recovery}</a>
    `
}

const getProductTemplate = () => function (values) {
        const products = values?.productContent?.products.length
            ?
            values?.productContent?.products
            :
            [values?.data?.products[0]?.id];
        const { layout } = values?.productContent
        console.log(values)
        const productTitleRenderer = (product) => `
            <div style="font-family: ${values.titleFont.value}; font-size: ${values.titleFontSize}px; text-align: ${values.titleAligment}; color: ${values.titleColor}; font-weight: ${values.titleFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.titleFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.titleFontStyle.styles.underline.active ? 'underline' : 'none'}" class="product-title">${product?.productTitle || 'Product Title'}</div> 
        `;

        const productPriceRenderer = (product) => `
           <div class="price">${product?.price && (product?.price)} $</div>
        `;

        const productComparisonPriceRenderer = (product) => product?.comparisonPrice ? `
            <div style="font-size: ${values.comparisonPriceFontSize}px;  color: ${values.comparisonPriceColor};" class="price-old">${product?.comparisonPrice} $</div>
        ` : '';

        const productDescriptionRenderer = (product) => `
            <div style="font-family: ${values.descriptionFont.value}; font-size: ${values.descriptionFontSize}px; text-align: ${values.descriptionAligment}; color: ${values.descriptionColor}; font-weight: ${values.descriptionFontStyle.styles.bold.active ? '700' : '400'};  font-style: ${values.descriptionFontStyle.styles.italic.active ? 'italic' : 'normal'}; text-decoration: ${values.descriptionFontStyle.styles.underline.active ? 'underline' : 'none'}" class="product-description">${product?.description || ''}</div>
        `;

        const productTypeRenderer = (product) => `
            <div class="product-type">${product?.productType}</div>
        `;

        const productButtonRenderer = (product, values) => `
            <a style="border-left: ${values.btnBorder.borderLeftWidth} ${values.btnBorder.borderLeftStyle} ${values.btnBorder.borderLeftColor}; border-top: ${values.btnBorder.borderTopWidth} ${values.btnBorder.borderTopStyle} ${values.btnBorder.borderTopColor}; border-right: ${values.btnBorder.borderRightWidth} ${values.btnBorder.borderRightStyle} ${values.btnBorder.borderRightColor}; border-bottom: ${values.btnBorder.borderBottomWidth} ${values.btnBorder.borderBottomStyle} ${values.btnBorder.borderBottomColor}; color: ${values.btnColor}; font-size: ${values.btnFontSize}px; background-color: ${values.btnBg};" class="button no-underline" href="${values.btnLink.url}" target="${values.btnLink.target}">${values.productCTA}</a>
        `;

        const productImageRenderer = (product) => `
            <img alt="" src="${product?.productImage?.src || 'https://b-tm.com.ua/assets/galleries/105/noimage.png'}" />
        `;

        return `
        <div class="products-grid ${layout}">
            ${products.map(productId => {
            const currentProduct = values.data.products.find((product) => product.id === +productId);
            return `
                        <div class="product-card">
                            
                            ${values?.details?.details.image ? productImageRenderer(currentProduct) : ''}
                           
                            <div class="product-card__inner">
                                ${values?.details?.details.title ? productTitleRenderer(currentProduct) : ''}
                                ${values?.details?.details.productType ? productTypeRenderer(currentProduct) : ''}
                                <div style="font-size: ${values.priceFontSize}px; font-family: ${values.priceFont.value}; color: ${values.priceColor};" class="product-price">
                                    ${
                values?.details?.details.price ? productPriceRenderer(currentProduct) : ''
            }
                                                    ${
                values?.details?.details.comparisonPrice
                    ? productComparisonPriceRenderer(currentProduct)
                    : ''
            }
                                </div>
                                ${values?.details?.details.description ? productDescriptionRenderer(currentProduct) : ''}
                                <div class="product-footer">
                                     ${values?.details?.details.button ? productButtonRenderer(currentProduct, values) : ''}
                                </div> 
                            </div>
                        </div>
                        `
        }).join('')
        }
        </div>
        `
    };

const productToolTemplate = getProductTemplate();

const couponToolTemplate = getCouponTemplate();

const eventsTemplate = getEventsTemplate();

unlayer.registerTool({
    name: 'product_tool',
    label: 'Product',
    icon: 'https://mkravtsov03.github.io/product-icon.svg',
    supportedDisplayModes: ['web', 'email'],
    options: {
        productContent: {
            title: 'Product Content',
            position: 1,
            options: {
                productContent: {
                   label: 'Product',
                   defaultValue: {layout: 'one-column', products: []},
                   widget: 'product_content',
                },
                layout: {
                   label: 'layout',
                   defaultValue: [
                                    {active: true, value: 'one-column', disabled: false},
                                    {active: false, value: 'two-columns', disabled: false},
                                    {active: false, value: 'two-columns--reverse', disabled: false},
                                    {active: false, value: 'three-columns', disabled: true},
                                ],
                   widget: 'layout',
                },
                details: {
                   label: 'Details',
                   defaultValue: {title: 'product', details: {title: false, comparisonPrice: false, image: true, price: false, description: false, productType: false, button: true}},
                   widget: 'product_details',
                },
                titleFont: {
                    label: 'Product title font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                titleFontSize: {
                    enabled: true,
                    label: 'Product title font size',
                    defaultValue: '24',
                    widget: 'counter',
                },
                titleFontStyle: {
                    enabled: true,
                    label: 'Product title font style',
                    defaultValue: {
                        label: 'Title Font style',
                        styles: {
                            bold: {
                                active: true,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                titleColor: {
                    enabled: true,
                    label: 'Product title color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                titleAligment: {
                    enabled: true,
                    label: 'Product title aligment',
                    defaultValue: 'center',
                    widget: 'alignment',
                },
                descriptionFont: {
                    label: 'Product description font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                descriptionFontSize: {
                    label: 'Product description font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                descriptionFontStyle: {
                    label: 'Product Description font style',
                    defaultValue: {
                        label: 'Description Font style',
                        styles: {
                            bold: {
                                active: true,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                descriptionColor: {
                    label: 'Product decription color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                descriptionAligment: {
                    label: 'Product description aligment',
                    defaultValue: 'left',
                    widget: 'alignment',
                },
                priceFont: {
                    label: 'Price font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                priceFontSize: {
                    enabled: true,
                    label: 'Price font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                priceColor: {
                    enabled: false,
                    label: 'Price color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                comparisonPriceFontSize: {
                    enabled: false,
                    label: 'Comparison price font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                comparisonPriceColor: {
                    enabled: false,
                    label: 'Comparison price color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                productCTA: {
                    enabled: true,
                  label: 'Button Content',
                  defaultValue: 'Buy it Now',
                  widget: 'text',
                },

                btnLink: {
                    enabled: true,
                  label: 'Button link',
                  defaultValue: {
                      url: '',
                      target: '_blank'
                  },
                  widget: 'link',
                },
                btnFontSize: {
                    enabled: true,
                    label: 'Button font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                btnColor: {
                    enabled: true,
                    label: 'Button color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                btnBg: {
                    enabled: true,
                    label: 'Button  background color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                btnBorder: {
                  label: 'Button border',
                  defaultValue: '',
                  widget: 'border',
                },

            },
        },
    },
    transformer: (values, source) => {
        const { name, value, data } = source;
        let newValues = values
        if (name === 'layout') {
            newValues = {
                ...values,
                productContent: {...values.productContent, layout: value.find(layout => layout.active === true).value}
            }
        }

        return newValues
    },
    propertyStates: (values) => {
        let newLayouts = [...values.layout];
        let titleProps = {};
        let descriptionProps = {};
        let priceProps = {};
        let comparisonPriceProps = {};
        let btnProps = {};
        if ( values.productContent.products.length > 2) {
            const newLayouts = [...values.layout]
            newLayouts[3].disabled = false
        } else if ( values.productContent.products.length <= 2) {
            const newLayouts = [...values.layout]
            newLayouts[3].disabled = true
        }
        if (!values.details.details.title) {
            titleProps = {
                titleFont: {
                    enabled: false
                },
                titleFontSize: {
                    enabled: false
                },
                titleColor: {
                    enabled: false
                },
                titleAligment: {
                    enabled: false
                },
                titleFontStyle: {
                    enabled: false
                }
            }
        } else {
            titleProps = {
                titleFont: {
                    enabled: true
                },
                titleFontSize: {
                    enabled: true
                },
                titleColor: {
                    enabled: true
                },
                titleAligment: {
                    enabled: true
                },
                titleFontStyle: {
                    enabled: true
                }
            }
        }
            if (!values.details.details.description) {
                descriptionProps = {
                    descriptionFont: {
                        enabled: false
                    },
                    descriptionFontSize: {
                        enabled: false
                    },
                    descriptionColor: {
                        enabled: false
                    },
                    descriptionAligment: {
                        enabled: false
                    },
                    descriptionFontStyle: {
                        enabled: false
                    }
                }
            }
            else {
            descriptionProps = {
                descriptionFont: {
                    enabled: true
                },
                descriptionFontSize: {
                    enabled: true
                },
                descriptionColor: {
                    enabled: true
                },
                descriptionAligment: {
                    enabled: true
                },
                descriptionFontStyle: {
                    enabled: true
                }
            }
        }
            if (!values.details.details.price) {
                priceProps = {
                    priceFont: {
                        enabled: false
                    },
                    priceFontSize: {
                        enabled: false
                    },
                    priceColor: {
                        enabled: false
                    },
                }
            }
            else {
                priceProps = {
                    priceFont: {
                        enabled: true
                    },
                    priceFontSize: {
                        enabled: true
                    },
                    priceColor: {
                        enabled: true
                    },
                }
        }
            if (!values.details.details.comparisonPrice) {
                comparisonPriceProps = {
                    comparisonPriceFontSize: {
                        enabled: false
                    },
                    comparisonPriceColor: {
                        enabled: false
                    },
                }
            }
            else {
                comparisonPriceProps = {
                    comparisonPriceFontSize: {
                        enabled: true
                    },
                    comparisonPriceColor: {
                        enabled: true
                    },
                }
        }
            if (!values.details.details.button) {
                btnProps = {
                    btnColor: {
                        enabled: false
                    },
                    btnBorder: {
                        enabled: false,
                    },
                    productCTA: {
                        enabled: false
                    },
                    btnFontSize: {
                        enabled: false
                    },
                    btnBg: {
                        enabled: false
                    },
                    btnLink: {
                        enabled: false
                    },
                }
            }
            else {
                btnProps = {
                    btnColor: {
                        enabled: true,
                    },
                    btnBorder: {
                        enabled: true,
                    },
                    productCTA: {
                        enabled: true,
                    },
                    btnFontSize: {
                        enabled: true,
                    },
                    btnBg: {
                        enabled: true
                    },
                    btnLink: {
                        enabled: true
                    },
                }
        }
        console.log({titleProps})
        return {
            layout: {
                value: newLayouts
            },
            ...titleProps,
            ...descriptionProps,
            ...priceProps,
            ...comparisonPriceProps,
            ...btnProps
        }
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return productToolTemplate(values);
            },
        }),
        exporters: {
            web: function (values) {
                return productToolTemplate(values);
            },
            email: function (values) {
                return productToolTemplate(values);
            },
            popup: function (values) {
                return productToolTemplate(values);
            },
        },
        head: {
            css: ProductStyles(),
            js: function (values) {},
        },
    },
});

unlayer.registerTool({
    name: 'coupon_tool',
    label: 'Coupon',
    icon: 'https://mkravtsov03.github.io/coupon-icon.svg',
    supportedDisplayModes: ['web', 'email'],
    options: {
        coupon: {
            title: 'Coupon',
            position: 1,
            options: {
                coupon: {
                    label: 'Coupon',
                    defaultValue: '',
                    widget: 'dropdown',
                },
                details: {
                    label: 'Details',
                    defaultValue: {title: 'coupon', details: {coupon: true, startsAt: false, expireDate: false, couponValue: false, couponType: false, link: false,}},
                    widget: 'product_details',
                },
                couponBtn: {
                    label: 'Button Content',
                    defaultValue: 'Buy it Now',
                    widget: 'text',
                },
                btnLink: {
                    enabled: true,
                    label: 'Button link',
                    defaultValue: {
                        url: '',
                        target: '_blank'
                    },
                    widget: 'link',
                },
                btnFontSize: {
                    enabled: true,
                    label: 'Button font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                btnColor: {
                    enabled: true,
                    label: 'Button color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                btnBg: {
                    enabled: true,
                    label: 'Button  background color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                btnBorder: {
                    label: 'Button border',
                    defaultValue: '',
                    widget: 'border',
                },
            },
        },
        couponFontProperties: {
            title: 'Coupon view options',
            position: 2,
            options: {
                titleFont: {
                    label: 'Coupon font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                titleFontSize: {
                    enabled: true,
                    label: 'Coupon font size',
                    defaultValue: '24',
                    widget: 'counter',
                },
                titleFontStyle: {
                    enabled: true,
                    label: 'Coupon font style',
                    defaultValue: {
                        label: 'Coupon Font style',
                        styles: {
                            bold: {
                                active: true,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                titleColor: {
                    enabled: true,
                    label: 'Coupon color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                titleAligment: {
                    enabled: true,
                    label: 'Coupon aligment',
                    defaultValue: 'center',
                    widget: 'alignment',
                },
            }
        },
        validFrom: {
            title: 'Valid from date view options',
            position: 3,
            options: {
                validFromFont: {
                    label: 'Valid from font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                validFromFontSize: {
                    enabled: true,
                    label: 'Valid from font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                validFromColor: {
                    enabled: true,
                    label: 'Valid from color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        },
        expireDate: {
            title: 'Expire date view options',
            position: 4,
            options: {
                expireDateFont: {
                    label: 'Expire date font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                expireDateFontSize: {
                    enabled: true,
                    label: 'Expire date font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                expireDateColor: {
                    enabled: true,
                    label: 'Expire date color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        },
        discountValue: {
            title: 'Discount value view options',
            position: 5,
            options: {
                discountValueFont: {
                    label: 'Dicount value font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                discountValueFontSize: {
                    enabled: true,
                    label: 'Dicount value font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                discountValueColor: {
                    enabled: true,
                    label: 'Dicount value color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        },
        discountType: {
            title: 'Discount type view options',
            position: 6,
            options: {
                discountTypeFont: {
                    label: 'Dicount type font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                discountTypeFontSize: {
                    enabled: true,
                    label: 'Dicount type font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                discountTypeColor: {
                    enabled: true,
                    label: 'Dicount type color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
            }
        },
    },
    propertyStates: (values) => {
        let couponProps = {};
        let validFromProps = {};
        let expireDateProps = {};
        let dicountValueProps = {};
        let dicountTypeProps = {};
        let btnProps = {};
        if (!values.details.details.coupon) {
            couponProps = {
                couponFont: {
                    enabled: false
                },
                couponFontSize: {
                    enabled: false
                },
                couponColor: {
                    enabled: false
                },
                couponAligment: {
                    enabled: false
                },
                couponFontStyle: {
                    enabled: false
                }
            }
        } else {
            couponProps = {
                titleFont: {
                    enabled: true
                },
                titleFontSize: {
                    enabled: true
                },
                titleColor: {
                    enabled: true
                },
                titleAligment: {
                    enabled: true
                },
                titleFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.startsAt) {
            validFromProps = {
                validFromFont: {
                    enabled: false
                },
                validFromFontSize: {
                    enabled: false
                },
                validFromColor: {
                    enabled: false
                },
            }
        }
        else {
            validFromProps = {
                validFromFont: {
                    enabled: true
                },
                validFromFontSize: {
                    enabled: true
                },
                validFromColor: {
                    enabled: true
                },
            }
        }
        if (!values.details.details.expireDate) {
            expireDateProps = {
                expireDateFont: {
                    enabled: false
                },
                expireDateFontSize: {
                    enabled: false
                },
                expireDateColor: {
                    enabled: false
                },
            }
        }
        else {
            expireDateProps = {
                expireDateFont: {
                    enabled: true
                },
                expireDateFontSize: {
                    enabled: true
                },
                expireDateColor: {
                    enabled: true
                },
            }
        }
            if (!values.details.details.link) {
            btnProps = {
                couponBtn: {
                    enabled: false
                },
                btnLink: {
                    enabled: false
                },
                btnFontSize: {
                    enabled: false
                },
                btnColor: {
                    enabled: false
                },
                btnBg: {
                    enabled: false
                },
                btnBorder: {
                    enabled: false
                },
            }
        }
        else {
                btnProps = {
                    couponBtn: {
                        enabled: true
                    },
                    btnLink: {
                        enabled: true
                    },
                    btnFontSize: {
                        enabled: true
                    },
                    btnColor: {
                        enabled: true
                    },
                    btnBg: {
                        enabled: true
                    },
                    btnBorder: {
                        enabled: true
                    },
                }
        }
        if (!values.details.details.couponValue) {
            couponValueProps = {
                discountValueFont: {
                    enabled: false
                },
                discountValueFontSize: {
                    enabled: false
                },
                discountValueColor: {
                    enabled: false
                },
            }
        }
        else {
            couponValueProps = {
                discountValueFont: {
                    enabled: true
                },
                discountValueFontSize: {
                    enabled: true
                },
                discountValueColor: {
                    enabled: true
                },
            }
        }
        if (!values.details.details.couponType) {
            couponTypeProps = {
                discountTypeFont: {
                    enabled: false
                },
                discountTypeFontSize: {
                    enabled: false
                },
                discountTypeColor: {
                    enabled: false
                },
            }
        }
        else {
            couponTypeProps = {
                discountTypeFont: {
                    enabled: true
                },
                discountTypeFontSize: {
                    enabled: true
                },
                discountTypeColor: {
                    enabled: true
                },
            }
        }
        return {
            ...couponProps,
            ...validFromProps,
            ...expireDateProps,
            ...dicountValueProps,
            ...dicountTypeProps,
            ...btnProps,
        }
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return couponToolTemplate(values);
            },
        }),
        exporters: {
            web: function (values) {
                return couponToolTemplate(values);
            },
            email: function (values) {
                return couponToolTemplate(values);
            },
            popup: function (values) {
                return couponToolTemplate(values);
            },
        },
        head: {
            css: CouponStyles(),
            js: function (values) {},
        },
    },
});

unlayer.registerTool({
    name: 'events_tool',
    label: 'Events',
    icon: 'https://mkravtsov03.github.io/coupon-icon.svg',
    supportedDisplayModes: ['web', 'email'],
    options: {
        abandoned_cart: {
            title: 'Abandoned cart',
            position: 1,
            options: {
                layout: {
                    label: 'Layout',
                    defaultValue: [
                        {active: true, value: 'one-column', disabled: false},
                        {active: false, value: 'two-columns', disabled: false},
                    ],
                    widget: 'layout',
                },
                details: {
                    label: 'Details',
                    defaultValue: {title: 'cart', details: {name: true, price: false, quantity: false, button: false, recovery: false, image: true}},
                    widget: 'product_details',
                },
                titleFont: {
                    label: 'Product title font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                titleFontSize: {
                    enabled: true,
                    label: 'Product title font size',
                    defaultValue: '18',
                    widget: 'counter',
                },
                titleFontStyle: {
                    enabled: true,
                    label: 'Product title font style',
                    defaultValue: {
                        label: 'Title Font style',
                        styles: {
                            bold: {
                                active: true,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                titleColor: {
                    enabled: true,
                    label: 'Product title color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                titleAligment: {
                    enabled: true,
                    label: 'Product title aligment',
                    defaultValue: 'center',
                    widget: 'alignment',
                },
                priceFont: {
                    label: 'Price font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                priceFontStyle: {
                    enabled: true,
                    label: 'Price font style',
                    defaultValue: {
                        label: 'Price Font style',
                        styles: {
                            bold: {
                                active: false,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                priceFontSize: {
                    enabled: true,
                    label: 'Price font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                priceColor: {
                    enabled: false,
                    label: 'Price color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                priceAligment: {
                    enabled: true,
                    label: 'Price aligment',
                    defaultValue: 'center',
                    widget: 'alignment',
                },
                quantityFont: {
                    label: 'Quantity font',
                    defaultValue: {
                        label: "Inter",
                        url: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
                        value: "'Inter', Arial, Helvetica, sans-serif"
                    },
                    widget: 'font_family',
                },
                quantityFontStyle: {
                    enabled: true,
                    label: 'Quantity font style',
                    defaultValue: {
                        label: 'Price Font style',
                        styles: {
                            bold: {
                                active: false,
                                value: 'bold'
                            },
                            italic: {
                                active: false,
                                value: 'italic'
                            },
                            underline: {
                                active: false,
                                value: 'underline'
                            }
                        }
                    },
                    widget: 'title_font_styles',
                },
                quantityFontSize: {
                    enabled: true,
                    label: 'Quantity font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                quantityColor: {
                    enabled: false,
                    label: 'Quantity color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                quantityAligment: {
                    enabled: true,
                    label: 'Quantity aligment',
                    defaultValue: 'left',
                    widget: 'alignment',
                },
                btn: {
                    label: 'Button Content',
                    defaultValue: 'Buy it Now',
                    widget: 'text',
                },
                btnFontSize: {
                    enabled: true,
                    label: 'Button font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                btnColor: {
                    enabled: true,
                    label: 'Button color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                btnBg: {
                    enabled: true,
                    label: 'Button  background color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                btnBorder: {
                    label: 'Button border',
                    defaultValue: '',
                    widget: 'border',
                },
                recovery: {
                    label: 'Recover cart Content',
                    defaultValue: 'Recover cart',
                    widget: 'text',
                },
                recoveryFontSize: {
                    enabled: true,
                    label: 'Recover cart font size',
                    defaultValue: '16',
                    widget: 'counter',
                },
                recoveryColor: {
                    enabled: true,
                    label: 'Recover cart color',
                    defaultValue: '#fff',
                    widget: 'color_picker',
                },
                recoveryBg: {
                    enabled: true,
                    label: 'Recover cart background color',
                    defaultValue: '#000',
                    widget: 'color_picker',
                },
                recoveryBorder: {
                    label: 'Recover cart border',
                    defaultValue: '',
                    widget: 'border',
                },
            },
        },
    },
    propertyStates: (values) => {
        let titleProps = {};
        let priceProps = {};
        let quantityProps = {};
        let btnProps = {};
        let recoveryProps = {};
        if (!values.details.details.name) {
            titleProps = {
                titleFont: {
                    enabled: false
                },
                titleFontSize: {
                    enabled: false
                },
                titleColor: {
                    enabled: false
                },
                titleAligment: {
                    enabled: false
                },
                titleFontStyle: {
                    enabled: false
                }
            }
        }
        else {
            titleProps = {
                titleFont: {
                    enabled: true
                },
                titleFontSize: {
                    enabled: true
                },
                titleColor: {
                    enabled: true
                },
                titleAligment: {
                    enabled: true
                },
                titleFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.price) {
            priceProps = {
                titleFont: {
                    enabled: false
                },
                priceFontSize: {
                    enabled: false
                },
                priceColor: {
                    enabled: false
                },
                priceAligment: {
                    enabled: false
                },
                priceFontStyle: {
                    enabled: false
                }
            }
        }
        else {
            priceProps = {
                titleFont: {
                    enabled: true
                },
                priceFontSize: {
                    enabled: true
                },
                priceColor: {
                    enabled: true
                },
                priceAligment: {
                    enabled: true
                },
                priceFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.quantity) {
            quantityProps = {
                quantityFont: {
                    enabled: false
                },
                quantityFontSize: {
                    enabled: false
                },
                quantityColor: {
                    enabled: false
                },
                quantityAligment: {
                    enabled: false
                },
                quantityFontStyle: {
                    enabled: false
                }
            }
        }
        else {
            quantityProps = {
                quantityFont: {
                    enabled: true
                },
                quantityFontSize: {
                    enabled: true
                },
                quantityColor: {
                    enabled: true
                },
                quantityAligment: {
                    enabled: true
                },
                quantityFontStyle: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.button) {
            btnProps = {
                btn: {
                    enabled: false
                },
                btnFontSize: {
                    enabled: false
                },
                btnColor: {
                    enabled: false
                },
                btnBg: {
                    enabled: false
                },
                btnBorder: {
                    enabled: false
                }
            }
        }
        else {
            btnProps = {
                btn: {
                    enabled: true
                },
                btnFontSize: {
                    enabled: true
                },
                btnColor: {
                    enabled: true
                },
                btnBg: {
                    enabled: true
                },
                btnBorder: {
                    enabled: true
                }
            }
        }
        if (!values.details.details.recovery) {
            recoveryProps = {
                recovery: {
                    enabled: false
                },
                recoveryFontSize: {
                    enabled: false
                },
                recoveryColor: {
                    enabled: false
                },
                recoveryBg: {
                    enabled: false
                },
                recoveryBorder: {
                    enabled: false
                }
            }
        }
        else {
            btnProps = {
                recovery: {
                    enabled: true
                },
                recoveryFontSize: {
                    enabled: true
                },
                recoveryColor: {
                    enabled: true
                },
                recoveryBg: {
                    enabled: true
                },
                recoveryBorder: {
                    enabled: true
                }
            }
        }
        return {
            ...titleProps,
            ...priceProps,
            ...quantityProps,
            ...btnProps,
            ...recoveryProps,
        }
    },
    renderer: {
        Viewer: unlayer.createViewer({
            render(values) {
                return eventsTemplate(values);
            },
        }),
        exporters: {
            web: function (values) {
                return eventsTemplate(values);
            },
            email: function (values) {
                return eventsTemplate(values);
            },
        },
        head: {
            css: ProductStyles(),
            js: function (values) {},
        },
    },
});


const labelsMap = {
    product: {
        button: 'Button',
        comparisonPrice: 'Comparison Price',
        description: 'Description',
        image: 'Image',
        price: 'Price',
        productType: 'Product type',
        title: 'Title',
    },
    coupon: {
        coupon: 'Coupon title',
        startsAt: 'Valid from',
        expireDate: 'Expire Date',
        couponValue: 'Discount value',
        couponType: 'Discount type',
        link: 'Link',
    },
    cart: {
        name: 'Item name',
        price: 'Item price',
        quantity: 'Item quantity',
        button: 'Item button',
        recovery: 'Recovery cart button',
        image: 'Item image'
    }
}

unlayer.registerPropertyEditor({
    name: 'product_details',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            const options = Object.keys(value.details)
            return renderDetails(labelsMap[value.title], options, value)
        },
        mount(node, value, updateValue, data) {
            optionsList = node.querySelectorAll('input');
            const details = {...value.details}
            optionsList.forEach(item => {
                item.onchange = function(e) {
                     details[e.target.name] = e.target.checked
                     return updateValue({...value, details: {...details}})
                }
            })
        }
    })
});


unlayer.registerPropertyEditor({
    name: 'title_font_styles',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            const options = Object.keys(value.styles)
            return renderTitleFontStyle(options, value)
        },
        mount(node, value, updateValue, data) {
            optionsList = node.querySelectorAll('input');
            const details = {...value.styles}
            optionsList.forEach(item => {
                item.onchange = function(e) {
                    console.log({details, event: e})
                    const option = {[e.target.name]: {...details[e.target.name], active: e.target.checked}}
                    return updateValue({...value, styles: {...details, ...option}})
                }
            })
        }
    })
});

unlayer.registerPropertyEditor({
    name: 'descr_font_styles',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            const options = Object.keys(value)
            return renderDescrFontStyle(options, value)
        },
        mount(node, value, updateValue, data) {
            optionsList = document.querySelectorAll('.descr-font-style input');
            const details = {...value}
            optionsList.forEach(item => {
                item.onchange = function(e) {
                    console.log({details, event: e})
                    const option = {[e.target.name]: {...details[e.target.name], active: e.target.checked}}
                    return updateValue({...details, ...option})
                }
            })
        }
    })
});

unlayer.registerPropertyEditor({
    name: 'layout',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render(value) {
            return layoutsList(value)
        },
        mount(node, value, updateValue) {
            layoutsOptions = node.querySelectorAll('input');
            const layouts = [...value];
            const newLayouts = []
            layoutsOptions.forEach((item, i) => {
                newLayouts.push({...layouts[i], active: false})
                item.onchange = function(e) {
                    const layoutIndex = newLayouts.findIndex(item => item.value === e.target.value)
                    newLayouts[layoutIndex].active = e.target.checked
                    console.log({layouts, layoutIndex})
                    return updateValue(newLayouts)
                }
            })
        }
    })
});

unlayer.registerPropertyEditor({
    name: 'product_content',
    layout: 'bottom',
    Widget: unlayer.createWidget({
        render( value, updateValue, data) {
            return productSelect(value, data)
        },
        mount(node, value, updateValue) {

            const handleClickListItem = (e) => {
                const li = e.target.closest('.list-item');

                const select = li.closest('.selectMultiple');
                select.classList.add('clicked');

                const a = document.createElement('a');
                a.dataset.value = li.dataset.value;
                a.innerHTML = `<em>${li.innerText}</em><i></i>`;
                a.classList.add('notShown');

                select.querySelector('div').appendChild(a);

                Array.from(document.getElementsByClassName('prodOption')).forEach((option) => {
                        if (option.value === li.dataset.value) {
                            option.selected = true
                            document.querySelector('select[multiple]').dispatchEvent(new Event('change'))
                        }
                    }
                )

                li.remove();

                select.querySelector('span').classList.add('hide');
                select.classList.remove('clicked');
            }

            const handleClickSelectedItem = (e) => {
                const a = e.target.closest('a');
                const select = e.target.closest('.selectMultiple');

                if (!a) {
                    return;
                }

                a.className = '';
                a.classList.add('remove');
                select.classList.add('open');
                const selectEl = select.querySelector('select');

                Array.from(document.getElementsByClassName('prodOption')).forEach((option) => {
                        if (option.value === a.dataset.value) {
                            option.selected = false
                            document.querySelector('select[multiple]').dispatchEvent(new Event('change'))
                        }
                    }
                )

                const li = document.createElement('li');
                li.dataset.value = a.dataset.value;
                li.classList.add('list-item');
                li.innerText = a.querySelector('em').innerText;
                select.querySelector('ul').appendChild(li);

                if (!selectEl.selectedOptions.length) {
                    select.querySelector('span').classList.remove('hide');
                }

                a.remove();
            }

            document.querySelector('select[multiple]').onchange = function() {
                const newVal = []
                Array.from(document.getElementsByClassName('prodOption')).forEach(option => {
                    if(option.selected) {
                        newVal.push(option.value)
                    }
                })
                updateValue({...value, products: newVal})
                const layoutItem = document.querySelector('.layout-list .three-columns')
                if (newVal.length > 2) {
                    layoutItem.classList.remove('disabled')
                } else {
                    layoutItem.classList.add('disabled')
                }
            }

            if (!document.querySelector('.selectMultiple')) {
                const select = document.querySelector('select[multiple]');
                const selectOptions = document.getElementsByClassName('prodOption');

                const newSelect = document.createElement('div');
                newSelect.classList.add('selectMultiple');

                const active = document.createElement('div');
                active.classList.add('active');

                const search = document.createElement('input');
                search.classList.add('search-field');
                search.setAttribute('placeholder', 'Search Products');

                const optionList = document.createElement('ul');
                const placeholder = select.dataset.placeholder;

                const searchItem =  document.createElement('li');
                searchItem.classList.add('search-item');
                searchItem.innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                    '<path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>\n' +
                    '</svg>'
                searchItem.appendChild(search)

                const placeholderElement = document.createElement('span');
                placeholderElement.innerText = placeholder;
                placeholderElement.classList.add('placeholder');
                active.appendChild(placeholderElement);
                optionList.appendChild(searchItem);


                search.addEventListener('keyup', (e) => {
                    let newOptions = document.querySelectorAll('.selectMultiple ul .list-item')
                    if (e.target.value) {
                        newOptions.forEach(function (item) {
                            if (!item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
                                item.classList.add('hide')
                            } else {
                                item.classList.remove('hide')
                            }
                        })
                        return
                    }
                    newOptions.forEach(function (item) {
                        item.classList.remove('hide')
                    })
                })

                Array.from(selectOptions).forEach(
                    function(option) {
                        let text = option.innerText;

                        if (option.selected) {
                            let tag = document.createElement('a');
                            tag.dataset.value = option.value;
                            tag.innerHTML = `<em>${text}</em><i></i>`;
                            active.appendChild(tag);
                            placeholderElement.classList.add('hide');
                        } else {
                            const item = document.createElement('li');
                            item.classList.add('list-item');
                            item.dataset.value = option.value;
                            item.innerHTML = text;
                            optionList.appendChild(item);
                        }
                    }
                );

                const arrow = document.createElement('div');
                arrow.classList.add('arrow');
                active.appendChild(arrow);

                newSelect.appendChild(active);
                newSelect.appendChild(optionList);

                select.parentElement.append(newSelect);
                placeholderElement.appendChild(select);

                document.querySelector('.selectMultiple ul').removeEventListener('click', handleClickListItem);
                document.querySelector('.selectMultiple > div').removeEventListener('click', handleClickSelectedItem);

                document.querySelector('.selectMultiple ul').addEventListener('click', handleClickListItem);
                document.querySelector('.selectMultiple > div').addEventListener('click', handleClickSelectedItem);

                document.querySelectorAll('.selectMultiple > div, .selectMultiple > div span').forEach((el) => {
                    el.addEventListener('click', (e) => {
                        el.closest('.selectMultiple').classList.toggle('open');
                    });
                });

                document.addEventListener('mouseup', function (e) {
                    const container = document.querySelector('.selectMultiple');
                    if (!container.contains(e.target)) {
                        container.classList.remove('open')
                    }
                });

            }

        }
    })
});
